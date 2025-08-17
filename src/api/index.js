// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// const getHeaders = () => {
//   const headers = { "Content-Type": "application/json" };
//   const token = localStorage.getItem("token");
//   if (token) headers.Authorization = `Bearer ${token}`;
//   return headers;
// };

// const handleResponse = async (response, endpoint) => {
//   if (!response.ok) {
//     const error = await response.json().catch(() => ({}));
//     console.error(`Error in ${endpoint}:`, {
//       status: response.status,
//       message: error.message || "Request failed",
//       details: error.error || error.errors || error,
//     });
//     throw new Error(error.message || "Request failed");
//   }
//   return response.json();
// };

// export const register = async (data) => {
//   if (!data.email || !data.password || !data.name) {
//     throw new Error("Missing required fields: email, password, name");
//   }
//   const response = await fetch(`${API_URL}/auth/register`, {
//     method: "POST",
//     headers: getHeaders(),
//     body: JSON.stringify(data),
//   });
//   return handleResponse(response, "register");
// };

// export const login = async (data) => {
//   if (!data.email || !data.password) {
//     throw new Error("Missing required fields: email, password");
//   }
//   const response = await fetch(`${API_URL}/auth/login`, {
//     method: "POST",
//     headers: getHeaders(),
//     body: JSON.stringify(data),
//   });
//   return handleResponse(response, "login");
// };

// export const getEvents = async (params) => {
//   const validParams = {};
//   if (params.page) validParams.page = params.page;
//   if (params.upcoming !== undefined) validParams.upcoming = params.upcoming;
//   if (params.search) validParams.search = params.search;
//   if (params.limit) validParams.limit = params.limit;
//   const query = new URLSearchParams(validParams).toString();
//   const response = await fetch(`${API_URL}/events?${query}`, {
//     method: "GET",
//     headers: getHeaders(),
//   });
//   return handleResponse(response, "getEvents");
// };

// export const getEventById = async (id) => {
//   if (!id) throw new Error("Event ID is required");
//   const response = await fetch(`${API_URL}/events/${id}`, {
//     method: "GET",
//     headers: getHeaders(),
//   });
//   return handleResponse(response, "getEventById");
// };

// export const createEvent = async (data) => {
//   if (!data.title || !data.description || !data.date) {
//     throw new Error("Missing required fields: title, description, date");
//   }
//   const formData = new FormData();
//   Object.entries(data).forEach(([key, value]) => {
//     if (key === "media" && Array.isArray(value)) {
//       value.forEach((file) => formData.append("media", file));
//     } else if (value !== undefined && value !== null) {
//       formData.append(key, value);
//     }
//   });

//   const response = await fetch(`${API_URL}/events`, {
//     method: "POST",
//     headers: { Authorization: getHeaders().Authorization },
//     body: formData,
//   });
//   return handleResponse(response, "createEvent");
// };

// export const updateEvent = async (id, data) => {
//   if (!id) throw new Error("Event ID is required");
//   if (!data.title || !data.description || !data.date) {
//     throw new Error("Missing required fields: title, description, date");
//   }
//   const formData = new FormData();
//   Object.entries(data).forEach(([key, value]) => {
//     if (key === "media" && Array.isArray(value)) {
//       value.forEach((file) => formData.append("media", file));
//     } else if (value !== undefined && value !== null) {
//       formData.append(key, value);
//     }
//   });

//   const response = await fetch(`${API_URL}/events/${id}`, {
//     method: "PUT",
//     headers: { Authorization: getHeaders().Authorization },
//     body: formData,
//   });
//   return handleResponse(response, "updateEvent");
// };

// export const deleteEvent = async (id) => {
//   if (!id) throw new Error("Event ID is required");
//   const response = await fetch(`${API_URL}/events/${id}`, {
//     method: "DELETE",
//     headers: getHeaders(),
//   });
//   return handleResponse(response, "deleteEvent");
// };

// export const getGalleryItems = async (params) => {
//   const validParams = {};
//   if (params.page) validParams.page = params.page;
//   if (params.limit) validParams.limit = params.limit;
//   const query = new URLSearchParams(validParams).toString();
//   const response = await fetch(`${API_URL}/gallery?${query}`, {
//     method: "GET",
//     headers: getHeaders(),
//   });
//   return handleResponse(response, "getGalleryItems");
// };

// export const createGalleryItem = async (data) => {
//   if (!data.media || !Array.isArray(data.media) || data.media.length === 0) {
//     throw new Error("At least one media file is required");
//   }
//   const formData = new FormData();
//   Object.entries(data).forEach(([key, value]) => {
//     if (key === "media" && Array.isArray(value)) {
//       value.forEach((file) => formData.append("media", file));
//     } else if (value !== undefined && value !== null) {
//       formData.append(key, value);
//     }
//   });

//   const response = await fetch(`${API_URL}/gallery`, {
//     method: "POST",
//     headers: { Authorization: getHeaders().Authorization },
//     body: formData,
//   });
//   return handleResponse(response, "createGalleryItem");
// };

// export const deleteGalleryItem = async (id) => {
//   if (!id) throw new Error("Gallery item ID is required");
//   const response = await fetch(`${API_URL}/gallery/${id}`, {
//     method: "DELETE",
//     headers: getHeaders(),
//   });
//   return handleResponse(response, "deleteGalleryItem");
// };

// export const createContact = async (data) => {
//   if (!data.name || !data.email || !data.message) {
//     throw new Error("Missing required fields: name, email, message");
//   }
//   const response = await fetch(`${API_URL}/contacts`, {
//     method: "POST",
//     headers: getHeaders(),
//     body: JSON.stringify(data),
//   });
//   return handleResponse(response, "createContact");
// };

// export const getUser = async () => {
//   const response = await fetch(`${API_URL}/users/me`, {
//     method: "GET",
//     headers: getHeaders(),
//   });
//   return handleResponse(response, "getUser");
// };

// export const getContacts = async () => {
//   const response = await fetch(`${API_URL}/contacts`, {
//     method: "GET",
//     headers: getHeaders(),
//   });
//   return handleResponse(response, "getContacts");
// };

// export const getUsers = async () => {
//   const response = await fetch(`${API_URL}/users`, {
//     method: "GET",
//     headers: getHeaders(),
//   });
//   return handleResponse(response, "getUsers");
// };

// export const getUserById = async (id) => {
//   if (!id) throw new Error("User ID is required");
//   const response = await fetch(`${API_URL}/users/${id}`, {
//     method: "GET",
//     headers: getHeaders(),
//   });
//   return handleResponse(response, "getUserById");
// };

// // Add a donation to an event by eventId
// export const addDonation = async (eventId, donationData) => {
//   if (!eventId) throw new Error("Event ID is required");
//   if (!donationData.donorName || !donationData.donationType) {
//     throw new Error("Donor name and donation type are required");
//   }

//   const response = await fetch(`${API_URL}/events/${eventId}/donations`, {
//     method: "POST",
//     headers: getHeaders(),
//     body: JSON.stringify(donationData),
//   });
//   return handleResponse(response, "addDonation");
// };

// // export const addDonation = async (eventId, donationData) => {
// //   const response = await fetch(`${API_URL}/events/${eventId}/donations`, {
// //     method: "POST",
// //     headers: getHeaders(),
// //     body: JSON.stringify(donationData),
// //   });
// //   return handleResponse(response, "addDonation");
// // };

// api.js (with suggested enhancements for festival filters in getEvents)

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const getHeaders = () => {
  const headers = { "Content-Type": "application/json" };
  const token = localStorage.getItem("token");
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
};

const handleResponse = async (response, endpoint) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    console.error(`Error in ${endpoint}:`, {
      status: response.status,
      message: error.message || "Request failed",
      details: error.error || error.errors || error,
    });
    throw new Error(error.message || "Request failed");
  }
  return response.json();
};

export const register = async (data) => {
  if (!data.email || !data.password || !data.name) {
    throw new Error("Missing required fields: email, password, name");
  }
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return handleResponse(response, "register");
};

export const login = async (data) => {
  if (!data.email || !data.password) {
    throw new Error("Missing required fields: email, password");
  }
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return handleResponse(response, "login");
};

export const getEvents = async (params) => {
  const validParams = {};
  if (params.page) validParams.page = params.page;
  if (params.upcoming !== undefined) validParams.upcoming = params.upcoming;
  if (params.search) validParams.search = params.search;
  if (params.limit) validParams.limit = params.limit;
  if (params.festivalType) validParams.festivalType = params.festivalType; // Added for festival-specific filters
  const query = new URLSearchParams(validParams).toString();
  const response = await fetch(`${API_URL}/events?${query}`, {
    method: "GET",
    headers: getHeaders(),
  });
  return handleResponse(response, "getEvents");
};

export const getEventById = async (id) => {
  if (!id) throw new Error("Event ID is required");
  const response = await fetch(`${API_URL}/events/${id}`, {
    method: "GET",
    headers: getHeaders(),
  });
  return handleResponse(response, "getEventById");
};

export const createEvent = async (data) => {
  if (!data.title || !data.description || !data.date) {
    throw new Error("Missing required fields: title, description, date");
  }
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (key === "media" && Array.isArray(value)) {
      value.forEach((file) => formData.append("media", file));
    } else if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  const response = await fetch(`${API_URL}/events`, {
    method: "POST",
    headers: { Authorization: getHeaders().Authorization },
    body: formData,
  });
  return handleResponse(response, "createEvent");
};

export const updateEvent = async (id, data) => {
  if (!id) throw new Error("Event ID is required");
  if (!data.title || !data.description || !data.date) {
    throw new Error("Missing required fields: title, description, date");
  }
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (key === "media" && Array.isArray(value)) {
      value.forEach((file) => formData.append("media", file));
    } else if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  const response = await fetch(`${API_URL}/events/${id}`, {
    method: "PUT",
    headers: { Authorization: getHeaders().Authorization },
    body: formData,
  });
  return handleResponse(response, "updateEvent");
};

export const deleteEvent = async (id) => {
  if (!id) throw new Error("Event ID is required");
  const response = await fetch(`${API_URL}/events/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });
  return handleResponse(response, "deleteEvent");
};

export const getGalleryItems = async (params) => {
  const validParams = {};
  if (params.page) validParams.page = params.page;
  if (params.limit) validParams.limit = params.limit;
  if (params.thumbnail !== undefined) validParams.thumbnail = params.thumbnail; // Added for thumbnails
  const query = new URLSearchParams(validParams).toString();
  const response = await fetch(`${API_URL}/gallery?${query}`, {
    method: "GET",
    headers: getHeaders(),
  });
  return handleResponse(response, "getGalleryItems");
};

export const createGalleryItem = async (data) => {
  if (!data.media || !Array.isArray(data.media) || data.media.length === 0) {
    throw new Error("At least one media file is required");
  }
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (key === "media" && Array.isArray(value)) {
      value.forEach((file) => formData.append("media", file));
    } else if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });

  const response = await fetch(`${API_URL}/gallery`, {
    method: "POST",
    headers: { Authorization: getHeaders().Authorization },
    body: formData,
  });
  return handleResponse(response, "createGalleryItem");
};

export const deleteGalleryItem = async (id) => {
  if (!id) throw new Error("Gallery item ID is required");
  const response = await fetch(`${API_URL}/gallery/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });
  return handleResponse(response, "deleteGalleryItem");
};

export const createContact = async (data) => {
  if (!data.name || !data.email || !data.message) {
    throw new Error("Missing required fields: name, email, message");
  }
  const response = await fetch(`${API_URL}/contacts`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return handleResponse(response, "createContact");
};

export const getUser = async () => {
  const response = await fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: getHeaders(),
  });
  return handleResponse(response, "getUser");
};

export const getContacts = async () => {
  const response = await fetch(`${API_URL}/contacts`, {
    method: "GET",
    headers: getHeaders(),
  });
  return handleResponse(response, "getContacts");
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`, {
    method: "GET",
    headers: getHeaders(),
  });
  return handleResponse(response, "getUsers");
};

export const getUserById = async (id) => {
  if (!id) throw new Error("User ID is required");
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: "GET",
    headers: getHeaders(),
  });
  return handleResponse(response, "getUserById");
};

export const addDonation = async (eventId, donationData) => {
  if (!eventId) throw new Error("Event ID is required");
  if (!donationData.donorName || !donationData.donationType) {
    throw new Error("Donor name and donation type are required");
  }

  const response = await fetch(`${API_URL}/events/${eventId}/donations`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(donationData),
  });
  return handleResponse(response, "addDonation");
};
