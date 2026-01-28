const messageData = {
  "to": "Ue6523a96d330232ece9e9f313f2c6455",
  "messages": [
    {
      "type": "flex",
      "altText": "Sales Team Capacity Overview",
      "contents": {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "size": "mega",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Sales Team <Team Name> Jan 2026",
                  "weight": "bold",
                  "size": "lg"
                },
                {
                  "type": "text",
                  "text": "Capacity Overview",
                  "size": "sm",
                  "color": "#666666"
                }
              ]
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "spacing": "md",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "PM",
                      "color": "#1E88E5",
                      "flex": 3
                    },
                    {
                      "type": "text",
                      "text": "10 MDs",
                      "align": "end",
                      "weight": "bold",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "SA",
                      "color": "#2E7D32",
                      "flex": 3
                    },
                    {
                      "type": "text",
                      "text": "5 MDs",
                      "align": "end",
                      "weight": "bold",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "SD",
                      "color": "#EF6C00",
                      "flex": 3
                    },
                    {
                      "type": "text",
                      "text": "0 MDs",
                      "align": "end",
                      "weight": "bold",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "PCO",
                      "color": "#EF6C00",
                      "flex": 3
                    },
                    {
                      "type": "text",
                      "text": "15 MDs",
                      "align": "end",
                      "weight": "bold",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "separator"
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Sale Overview",
                      "color": "#666666",
                      "flex": 3
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Target",
                      "color": "#1E88E5",
                      "flex": 3
                    },
                    {
                      "type": "text",
                      "text": "1,000,000",
                      "align": "end",
                      "weight": "bold",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Actual",
                      "color": "#2E7D32",
                      "flex": 3
                    },
                    {
                      "type": "text",
                      "text": "1,150,000",
                      "align": "end",
                      "weight": "bold",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "separator"
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Remaining",
                      "color": "#EF6C00",
                      "flex": 3
                    },
                    {
                      "type": "text",
                      "text": "-150,000",
                      "align": "end",
                      "weight": "bold",
                      "flex": 5
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Over Target",
                      "color": "#C62828",
                      "align": "center",
                      "weight": "bold",
                      "size": "sm",
                      "flex": 5
                    }
                  ]
                }
              ]
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "button",
                  "style": "primary",
                  "color": "#1E88E5",
                  "action": {
                    "type": "uri",
                    "label": "View Detail",
                    "uri": "http://example.com"
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
};

module.exports = messageData;  