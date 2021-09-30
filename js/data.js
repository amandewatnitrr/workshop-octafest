const workshopData = [
  // {
  //     workshopName: "Name of the workshop",
  //     about: "About the cool workshop.", //About the workshop in about 50 words
  //     link: "https://iter.hackclub.com/workshops", //enter the link of the workshop
  //     image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
  // },
  {
    workshopName: "Octafest'21: Kickoff",
    about: "Starting of Hacktober fest journey.", //About the workshop in about 50 words
    link: "https://www.airmeet.com/e/9a1ab010-2185-11ec-b179-4b211ef62be1", //enter the link of the workshop
    image:
      "https://media.istockphoto.com/photos/businesswoman-holding-a-speech-picture-id1254127323?b=1&k=20&m=1254127323&s=170667a&w=0&h=l7PIoqgPnTZeA5fINQ22ShbZt9gOxaCDbxXu0yxf5fQ=", //give the image (make sure to host it before adding)
    date: "5th Oct 2021", //give the event's date
    time: "5 PM Onwards", //give the event's time
  },
];

//Past

// const pastWorkshopData = [
//   {
//     workshopName: "Python Development",
//     about: "Learn the basics of Python in 7 Days", //About the workshop in about 50 words
//     link: "https://github.com/hackclubiter/Codathon-PyDev", //enter the link of the workshop
//     image:
//       "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
//   },
//   {
//     workshopName: "Web Development",
//     about: "Learn the basics of web in 7 Days", //About the workshop in about 50 words
//     link: "https://github.com/hackclubiter/Codathon-WebDev", //enter the link of the workshop
//     image:
//       "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3Nob3B8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", //give the image (make sure to host it before adding)
//   },
//   {
//     workshopName: "Decode the Programming with Shubham Sonal",
//     about: "How to get started with programming!", //About the workshop in about 50 words
//     link: "https://youtu.be/nHzmwoStZKU", //enter the link of the workshop
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80", //give the image (make sure to host it before adding)
//   },
//   {
//     workshopName: "Hack the Web w/ Harsh Bajpai",
//     about: "Harsh gave us an overall idea about Web-Dev!", //About the workshop in about 50 words
//     link: "https://youtu.be/7K0OLLjq0DY", //enter the link of the workshop
//     image:
//       "https://i.ytimg.com/vi/7K0OLLjq0DY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPSXqrTYqHY4zQNYBgiXNh2k6Kag", //give the image (make sure to host it before adding)
//   },
//   {
//     workshopName: "Codathon",
//     about: "An amalgamation of Python development along with Web development.", //About the workshop in about 50 words
//     link: "https://youtu.be/ERhCWZQ6GXY", //enter the link of the workshop
//     image:
//       "https://i.ytimg.com/vi/ERhCWZQ6GXY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU5e3kkBihfRDSaG2XG00SXrEGuQ", //give the image (make sure to host it before adding)
//   },
//   {
//     workshopName: "Ask Samarjeet",
//     about: "Regarding Internships and preparation.", //About the workshop in about 50 words
//     link: "https://youtu.be/x_LF5XpcUAQ", //enter the link of the workshop
//     image:
//       "https://i.ytimg.com/vi/x_LF5XpcUAQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8I7yPcdCJkqRrHaPFAOunuLKvZA", //give the image (make sure to host it before adding)
//   },
//   {
//     workshopName: "What is IFTTT?",
//     about: "Learn about automation & IOT at one place.", //About the workshop in about 50 words
//     link: "https://youtu.be/8JqAPCWBh2E", //enter the link of the workshop
//     image:
//       "https://i.ytimg.com/vi/8JqAPCWBh2E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCboA22hRDTXsILUO9ubUmdeNuJ9w", //give the image (make sure to host it before adding)
//   },
//   {
//     workshopName: "What is IoT?",
//     about: "Get started with IoT", //About the workshop in about 50 words
//     link: "https://youtu.be/mNMFa6tL5PE", //enter the link of the workshop
//     image:
//       "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80", //give the image (make sure to host it before adding)
//   },
// ];
