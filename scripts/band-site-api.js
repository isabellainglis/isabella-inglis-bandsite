const API_KEY = "d07d1e8d-6301-4bcf-b713-53d5ff9dedc5";

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }

  async getComments() {
    const comments = await axios.get(
      `${this.baseUrl}comments?api_key=${this.apiKey}`
    );

    const sortedComments = comments.data.sort(
      (comment1, comment2) => comment2.timestamp - comment1.timestamp
    );

    return sortedComments;
  }

  async postComment(comment) {
    const newComment = await axios.post(
      `${this.baseUrl}comments?api_key=${this.apiKey}`,
      comment
    );
    return newComment.data;
  }

  async getShows() {
    const shows = await axios.get(
      `${this.baseUrl}showdates?api_key=${this.apiKey}`
    );

    return shows.data;
  }

  async likeComment(id) {
    const likes = await axios.put(
      `${this.baseUrl}comments/${id}/like?api_key=${this.apiKey}`
    );
  }
}
