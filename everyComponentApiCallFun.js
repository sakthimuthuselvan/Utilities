 
 
 
  getProfileData = () => {
    const { instance_id, loc_id } = this.state;
    let url = 'addons/asset/category/setting';
    let data = {
      "instance_id": instance_id,
      "loc_id": loc_id,
      "type": "list"
    }
    this.axiosPost("POST", data, url, "getProfileResponse", true);
  }

 axiosPost = (method, inputdata, apiUrl, postAction, showAlert = true) => {
    let data = inputdata;
    let url = apiUrl;
    this.setState({ loader: true });
    let responseData = HttpRequest({ method, data, url });
    responseData.then(response => {
      this.setState({ loader: false });
      let apiResponse = response.data;
      switch (postAction) {
        case "generateApiRes":
          this.generateApiRes(apiResponse)
          break;
        case "ListAPiCall":
          this.listAPiCallRes(apiResponse)
          break;
        default:
          break;
      }
      return 1;
    })
      .catch(error => {
        this.setState({ loader: false });
        let message = "Something went wrong";
        if (error.response !== undefined && error.response.data.response_type) {
          message = error.response.data.response_type === "error" ? error.response.data.response_message : "Something went wrong";
        } else if (error.response !== undefined && error.response.data.error) {
          message = error.response.data.error ? error.response.data.error_description : "Something went wrong";
        }
        if (showAlert) this.setState({ alert: true, alertstatus: "failed", alertMessage: message });
      });
  }
