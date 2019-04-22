import React, { Component } from "react";

import axios from "axios";
import { toJson } from "unsplash-js";

import ModalWindow from "./ModalWindow.js";
import ImageTile from "./ImageTile.js";

class ImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pics: [],
      pixObj: [],

      showModal: "none",
      content: "",

      userID: this.props.userId,
      filter: this.props.filter,
      // scrollPosition: "",
      pageNumber: 0,
      needScroll: false
    };
  }

  updateThisState = message => {
    this.setState({ showModal: "none" }, function() {
      this.setState(
        {
          showModal: "block",
          content: message
        },
        function() {
          if (this.props.galleryType === "api") {
            this.apiToUnsplashForAllImages();
          } else if (this.props.galleryType === "database") {
            if (this.props.filter === "all-looks") {
              // console.log(this.props.filter);
              this.apiToDatabaseForAllImages();
            } else {
              this.apiToDatabaseForCategory();
            }
          }
        }
      );
    });
  };

  _closeModal = () => {
    this.setState({ showModal: "none" }, function() {});
  };

  apiToDatabaseForAllImages = () => {
    axios
      .get(`/api/looks/user/${this.state.userID}`)
      .then(res => {
        const apiObject = res.data;
        this.setState({ pixObj: [] });
        this.setState({ pixObj: [...this.state.pixObj, ...apiObject] });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  apiToUnsplashForAllImages = () => {
    //use this to load api for all images from unsplash

    const Unsplash = require("unsplash-js").default;

    const unsplash = new Unsplash({
      applicationId:
        "89f1ca3f4bd3bef273706bb1866ede73fce3bfe3515a8fcfa96a3d057eea11e9",
      secret: "07f9578de6c18570497cac47d8fb2fc6c6559c8b34163720b059ac3ec7de4d6c"
    });

    unsplash.collections
      .getCollectionPhotos(1714447, 1, 30, "latest")
      .then(toJson)
      .then(json => {
        const apiObject = json;

        this.setState({ pixObj: [...this.state.pixObj, ...apiObject] });
      });
  };

  apiToDatabaseForCategory = () => {
    this.setState({ filter: this.props.filter }, function() {
      axios
        .get(`/api/looks/user/${this.state.userID}/${this.state.filter}`)
        .then(res => {
          const apiObject = res.data;
          this.setState({ pixObj: [] });
          this.setState({ pixObj: [...this.state.pixObj, ...apiObject] });
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  };

  componentDidMount() {
    if (this.props.galleryType === "api") {
      this.apiToUnsplashForAllImages();
    } else if (this.props.galleryType === "database") {
      this.apiToDatabaseForAllImages();
    }

    // window.addEventListener('scroll', this.onScroll);
  }

  //infinite scroll (in-progress)
  // onScroll = () => {

  //   if((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 200)){

  //     this.setState({needScroll: true}, function () {

  //       const Unsplash = require('unsplash-js').default;

  //       const unsplash = new Unsplash({
  //         applicationId: "89f1ca3f4bd3bef273706bb1866ede73fce3bfe3515a8fcfa96a3d057eea11e9",
  //         secret: "07f9578de6c18570497cac47d8fb2fc6c6559c8b34163720b059ac3ec7de4d6c"
  //       });

  //       const page = this.props.pageNumber + 1;

  //       unsplash.collections.getCollectionPhotos(1714447, page, 30, "popular")
  //       .then(toJson)
  //       .then(json => {
  //         const apiObject = json;

  //         this.setState({pixObj:[...this.state.pixObj, ...apiObject]});

  //       });

  //       console.log(this.state.needScroll);

  //     })
  //   }

  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.onScroll);
  // }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      if (this.props.filter === "all-looks") {
        this.apiToDatabaseForAllImages();
      } else {
        this.apiToDatabaseForCategory(this.props.filter);
      }
    }
  }

  render() {
    let pix;

    let masonryClass;
    let imageCardClass;
    let imageLookClass;

    if (this.state.pixObj) {
      if (this.state.pixObj.length < 20) {
        masonryClass = "masonryApi2";
        imageCardClass = "img-card2";
        imageLookClass = "img-look2";
      } else if (this.state.pixObj.length >= 20) {
        masonryClass = "masonryApi";
        imageCardClass = "img-card";
        imageLookClass = "img-look";
      }

      pix = this.state.pixObj.map((obj, i) => {
        let imageURL = "";
        let imageIcon = "";
        let imageAltText = "";
        let imageAction = "";
        let imageID = "";

        if (this.props.galleryType === "api") {
          imageURL = obj.urls.regular;
          imageAltText = obj.alt_description;
          imageIcon = require("../images/icon-heart.svg");
          imageAction = "save";
        } else if (this.props.galleryType === "database") {
          imageURL = obj.imgURL;
          imageAltText = obj.imgAlt;
          imageIcon = require("../images/icon-edit.svg");
          imageAction = "edit";
          imageID = obj._id;
        }

        return (
          <div
            key={i}
            className={imageCardClass}
            onClick={() => {
              this.setState({
                showModal: "block",
                content: (
                  <ImageTile
                    imgURL={imageURL}
                    imgAlt={imageAltText}
                    imageAction={imageAction}
                    imgID={imageID}
                    updateState={this.updateThisState}
                    userId={this.props.userId}
                  />
                )
              });
            }}
          >
            <img
              key={i}
              src={imageURL}
              alt={imageAltText}
              className={imageLookClass}
            />
            <img src={imageIcon} alt="like" className="img-icon" />
          </div>
        );
      });
    }

    return (
      <div className={masonryClass}>
        {pix}

        <ModalWindow
          showModal={this.state.showModal}
          closeModal={this._closeModal}
          content={this.state.content}
          autoClose={false}
        />
      </div>
    );
  }
}

export default ImageGallery;
