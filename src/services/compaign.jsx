const api = "http://localhost:4000/pruebas";

export const geCompaigns = async () => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    return {
      data: data,
      error: "",
    };
  } catch (error) {
    return {
      data: [],
      error: "Error en el endpoint",
    };
  }
};

export const getCompaign = async (id) => {
  try {
    const response = await fetch(`${api}/${id}`);
    const data = await response.json();
    console.log(data);
    return {
      data: data,
      error: "",
    };
  } catch (error) {
    return {
      data: [],
      error: "Error en el endpoint",
    };
  }
};

export const postCompaigns = async (Compaign) => {
  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Compaign),
    });
    const data = await response.json();
    return {
      data: data,
      error: "",
    };
  } catch (error) {
    return {
      data: "",
      error: "Error al agregar",
    };
  }
};

export const editCompaign = async (id, Compaign) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Compaign),
    });
    const data = await response.json();
    return {
      data: data,
      error: "",
    };
  } catch (error) {
    return {
      data: "",
      error: "Error al editar",
    };
  }
};

export const deleteCompaign = async (id) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: "DELETE",
    });
    if (response.status == 200)
      return {
        data: true,
        error: "",
      };

    throw "Error al eliminar";
  } catch (error) {
    return {
      data: "",
      error: error,
    };
  }
};

export const updateCompaing = async (id) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estado: "Activada",
      }),
    });
    const data = await response.json();
    if (response.status == 200)
      return {
        data: data,
        error: "",
      };
    else {
      return {
        data: "",
        error: "Error al cambiar estado",
      };
    }
  } catch (error) {
    return {
      data: "",
      error: "Error al cambiar estado",
    };
  }
};
