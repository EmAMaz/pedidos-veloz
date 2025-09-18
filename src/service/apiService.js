const url = import.meta.env.VITE_ENVIRONMENT === "PROD" ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_DEV;

class apiService {
  async request(method, url, body) {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return response.json();
  }
  async getProducts() {
    try {
      const response = await this.request("get", url + `productos`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async createProduct(dataProduct) {
    try {
      const response = await this.request("post", url + `productos`, dataProduct);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async filterProductsByType(type) {
    try {
      const response = this.request(
        "get",
        url + `/productos/filter?type=${type}`
      );
      const data = await response;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getCategorys() {
    try {
      const response = this.request("get", url + `categorias`);
      const data = await response;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getProductsByCategory(categoryId) {
    try {
      const response = this.request(
        "get",
        url + `productos` + `/filter?categoria=${Number(categoryId)}`
      );
      const data = await response;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async loginUser(email, password) {
    const response = this.request(
      "post",
      url + `usuario/login?email=${email}&password=${password}`
    );
    const data = await response;
    return data;
  }
}

export default new apiService();
