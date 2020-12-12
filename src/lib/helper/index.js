class BaseHelper {
  /**
   * @desc To get absolute url of image options
   *
   * @param {String} image
   *
   * @return {String} image url
   *
   */
  getImagePath(image, path) {
    const imagePath = `${this.getRootUrl()}/assets/images/${path}/`;
    return `${imagePath}/${image}`;
  }

  /**
   * @desc To get root url of current domain
   *
   * @return root url
   *
   */
  getRootUrl() {
    return window.location.origin;
  }
}

export default new BaseHelper();
