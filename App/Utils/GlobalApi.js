import { request, gql } from "graphql-request";

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/cls791k5y0vtx01uqypuicd27/master";

const getSlider = async () => {
  return [
    {
      id: "1",
      image: {
        url: require("../../assets/images/Slider1.png"),
      },
      name: "Slider1",
    },
    {
      id: "2",
      image: {
        url: require("../../assets/images/Slider2.png"),
      },
      name: "Slider2",
    },
  ];
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;

  const result = await request("https://api.spacex.land/graphql/", query);
  return result;
};

const getCategories = async () => {
  return [
    {
      id: "1",
      icon: {
        url: require("../../assets/images/Slider1.png"),
      },
      name: "Cleaning",
    },
    {
      id: "2",
      icon: {
        url: require("../../assets/images/Slider2.png"),
      },
      name: "Repairing",
    },
    {
      id: "3",
      icon: {
        url: require("../../assets/images/Slider2.png"),
      },
      name: "Painting",
    },
    {
      id: "4",
      icon: {
        url: require("../../assets/images/Slider2.png"),
      },
      name: "Washing",
    },
  ];
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request("https://api.spacex.land/graphql/", query);
  return result;
};

export default {
  getSlider,
};
