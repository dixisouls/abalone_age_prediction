// API base URL - change this to match your backend URL
const API_BASE_URL = "http://localhost:8000";

/**
 * Fetch API wrapper with error handling
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} - Response data
 */
export const fetchApi = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    // Handle non-200 responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.detail || `Request failed with status ${response.status}`
      );
    }

    // Parse JSON response
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};

/**
 * Check API health
 * @returns {Promise<Object>} Health status
 */
export const checkHealth = () => {
  return fetchApi("/health");
};

/**
 * Get model information
 * @returns {Promise<Object>} Model information
 */
export const getModelInfo = () => {
  return fetchApi("/api/info");
};

/**
 * Submit abalone measurements for prediction
 * @param {Object} measurements - Abalone measurements
 * @returns {Promise<Object>} Prediction results
 */
export const predictAge = (measurements) => {
  return fetchApi("/api/predict", {
    method: "POST",
    body: JSON.stringify(measurements),
  });
};

export default {
  checkHealth,
  getModelInfo,
  predictAge,
};
