class API {
  constructor() {
    this.baseUrl = "https://deezerdevs-deezer.p.rapidapi.com";
    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "253397c536msh43060b6c75eec42p195c68jsn5704e02f7482",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };
    this.musics = [];
  }

  async getPopularMusics() {
    try {
      const response = await fetch(
        `${this.baseUrl}/search?q=pop`,
        this.options,
      );
      const data = await response.json();
      const formatted = data.data;
      this.musics = formatted;
      return formatted;
    } catch (error) {
      alert("Şarkılar yüklenirken hata oluştu!");
      return [];
    }
  }

  async getSearchMusic(query) {
    try {
      const response = await fetch(
        `${this.baseUrl}/search?q=${query}`,
        this.options,
      );
      const data = await response.json();
      const formatted = data.data;
      this.musics = formatted;
      return formatted;
    } catch (error) {
      alert(
        "Arama işlemi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
      );
      return [];
    }
  }
}
export default API;
