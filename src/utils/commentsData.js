const commentsData = [
  {
    name: "John Doe",
    text: "This is a great video!",
    replies: [
      {
        name: "Alice Smith",
        text: "I agree, its awesome!",
        replies: [
          {
            name: "Charlie Brown",
            text: "The quality is amazing!",
            replies: [],
          },
        ],
      },
      {
        name: "Bob Johnson",
        text: "I learned a lot from this.",
        replies: [
          {
            name: "Eve Wilson",
            text: "Me too, its very informative!",
            replies: [
              {
                name: "Frank Miller",
                text: "The presenter is excellent!",
                replies: [],
              },
              {
                name: "Grace Davis",
                text: "I wish there were more videos like this.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sarah Brown",
    text: "I wish there was more content like this.",
    replies: [
      {
        name: "Hank Green",
        text: "Totally agree! We need more of these.",
        replies: [],
      },
    ],
  },
  {
    name: "Michael Clark",
    text: "Thanks for sharing!",
    replies: [],
  },
];

export default commentsData;
