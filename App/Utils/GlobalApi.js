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

const getBusinessList = () => {
  return [
    {
      id: 1,
      name: "Company A",
      email: "companya@example.com",
      contactPerson: "John Doe",
      category: {
        name: "Technology",
      },
      address: "123 Tech Street, Cityville",
      about: "Leading technology solutions provider.",
      images: [
        {
          url: "https://picsum.photos/200",
        },
        {
          url: "https://picsum.photos/200",
        },
      ],
    },
    {
      id: 2,
      name: "Organization B",
      email: "orgb@example.com",
      contactPerson: "Jane Smith",
      category: {
        name: "Education",
      },
      address: "456 Learn Lane, Eduville",
      about: "Dedicated to quality education services.",
      images: [
        {
          url: "https://picsum.photos/200",
        },
        {
          url: "https://picsum.photos/200",
        },
      ],
    },
    {
      id: 3,
      name: "Consultancy X",
      email: "consultancyx@example.com",
      contactPerson: "Alice Johnson",
      category: {
        name: "Consulting",
      },
      address: "789 Consult Street, Advisor City",
      about: "Your trusted business consultant.",
      images: [
        {
          url: "https://picsum.photos/200",
        },
        {
          url: "https://picsum.photos/200",
        },
      ],
    },
    {
      id: 4,
      name: "Artistic Creations",
      email: "artisticcreations@example.com",
      contactPerson: "Alex Turner",
      category: {
        name: "Arts",
      },
      address: "101 Art Avenue, Creativeland",
      about: "Exploring the world of artistic expressions.",
      images: [
        {
          url: "https://picsum.photos/200",
        },
        {
          url: "https://picsum.photos/200",
        },
      ],
    },
  ];

  const query = gql`
    query getBusinessList {
      businessLists {
        id
        name
        email
        contactPerrson
        category {
          name
        }
        address
        about
        images {
          url
        }
      }
    }
  `;
};

export default {
  getSlider,
  getCategories,
  getBusinessList,
};
