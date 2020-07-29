var bookmarks = (function() {

  var mod = {};

  mod.all = [{
    name: {
      text: "Apps",
      show: true
    },
    openAll: {
      show: false
    },
    items: [{
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "ENA"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "brain",
            prefix: "fa",
            label: "Brain"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Engram",
          size: 0.9
        }
      },
      url: "https://engram.danielstrauss.net/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453107633
    }, {
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "CLO"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "clock",
            prefix: "fas",
            label: "Clock"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Clockify",
          size: 0.9
        }
      },
      url: "https://clockify.me/login",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453107633
    }, { 
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "NOT"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "sticky-note",
            prefix: "fas",
            label: "StickyNote"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Notion",
          size: 0.9
        }
      },
      url: "https://www.notion.so/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453107633
    },{
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "AZ"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "amazon",
            prefix: "fab",
            label: "Amazon"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Amazon",
          size: 0.9
        }
      },
      url: "https://www.amazon.de/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453107633
    }, {
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "GM"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "envelope",
            prefix: "fas",
            label: "Envelope"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Gmail",
          size: 0.9
        }
      },
      url: "https://mail.google.com/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453110265
    }, {
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "N"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "film",
            prefix: "fas",
            label: "Film"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Netflix",
          size: 0.9
        }
      },
      url: "https://www.netflix.com/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453104460
    }, {
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "DR"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "google-drive",
            prefix: "fab",
            label: "GoogleDrive"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Drive",
          size: 0.9
        }
      },
      url: "https://drive.google.com/drive/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453111953
    }]
  }, {
    name: {
      text: "Admin",
      show: true
    },
    openAll: {
      show: false
    },
    items: [{
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "DEV"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "code",
            prefix: "fas",
            label: "Code"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Devdocs",
          size: 0.9
        }
      },
      url: "http://devdocs.io/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453101749
    }, {
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "GIT"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "github",
            prefix: "fab",
            label: "GitHub"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Github",
          size: 0.9
        }
      },
      url: "https://github.com/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453108926
    }, {
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "NET"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "server",
            prefix: "fa",
            label: "Server"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Netlify",
          size: 0.9
        }
      },
      url: "https://www.netlify.com/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453108926
    }, {
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "BIT"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "shield-alt",
            prefix: "fas",
            label: "ShieldAlt"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Bitwarden",
          size: 0.9
        }
      },
      url: "https://vault.bitwarden.com/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453108926
    }, {
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "NAM"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "ethernet",
            prefix: "fas",
            label: "Ethernet"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Namecheap",
          size: 0.9
        }
      },
      url: "https://www.namecheap.com/myaccount/login/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453108926
    }, {
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "HER"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "database",
            prefix: "fas",
            label: "Database"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Heroku",
          size: 0.9
        }
      },
      url: "https://id.heroku.com/login",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453108926
    }]
  }, {
    name: {
      text: "Social",
      show: true
    },
    openAll: {
      show: false
    },
    items: [{
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "IN"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "linkedin-in",
            prefix: "fab",
            label: "LinkedinIn"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "LinkedIn",
          size: 0.9
        }
      },
      url: "https://www.linkedin.com/login/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453101749
    }, {
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "INS"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "instagram",
            prefix: "fab",
            label: "Instagram"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Instagram",
          size: 0.9
        }
      },
      url: "https://www.instagram.com/accounts/login/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453108926
    }, {
      display: {
        direction: "vertical",
        order: "visualname",
        alignment: "centercenter",
        gutter: 2,
        rotate: 0,
        translate: {
          x: 0,
          y: 0
        },
        visual: {
          show: true,
          type: "icon",
          letter: {
            size: 3,
            text: "R"
          },
          image: {
            size: 3,
            url: ""
          },
          icon: {
            size: 3,
            name: "reddit-alien",
            prefix: "fab",
            label: "reddit Alien"
          },
          shadow: {
            size: 0
          }
        },
        name: {
          show: true,
          text: "Reddit",
          size: 0.9
        }
      },
      url: "https://www.reddit.com/",
      accent: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      color: {
        by: "theme",
        hsl: {
          h: 0,
          s: 0,
          l: 0
        },
        rgb: {
          r: 0,
          g: 0,
          b: 0
        },
        opacity: 1
      },
      image: {
        url: "",
        opacity: 1
      },
      wide: false,
      tall: false,
      searchMatch: false,
      timeStamp: 1546453111491
    }]
  }];

  mod.get = function(data) {
    var _singleBookmark = function() {
      var found = false;
      if (mod.all.length > 0) {
        mod.all.forEach(function(arrayItem, index) {
          arrayItem.forEach(function(arrayItem, index) {
            if (arrayItem[index].timeStamp === data.timeStamp) {
              found = arrayItem[index];
            };
          });
        });
      };
      return found;
    };
    if (data && typeof data.timeStamp == "number") {
      return _singleBookmark();
    } else {
      return mod.all;
    };
  };

  mod.restore = function(data) {
    if ("bookmarks" in data) {
      mod.all = data.bookmarks;
    };
  };

  mod.add = {
    link: function(data) {
      if (data) {
        if (data.position.group.new) {
          mod.add.group({
            position: {
              origin: null,
              destination: data.position.destination.group
            },
            group: {
              name: {
                text: data.position.group.name.text,
                show: data.position.group.name.show
              },
              openAll: {
                show: data.position.group.openAll.show
              },
              items: []
            }
          });
        };
        mod.all[data.position.destination.group].items.splice(data.position.destination.item, 0, data.link);
      };
    },
    group: function(data) {
      if (data) {
        mod.all.splice(data.position.destination, 0, data.group);
      };
    }
  };

  mod.edit = {
    link: function(data) {
      if (data.position.group.new) {
        mod.add.group({
          position: {
            origin: null,
            destination: data.position.destination.group
          },
          group: {
            name: {
              text: data.position.group.name.text,
              show: data.position.group.name.show
            },
            openAll: {
              show: data.position.group.openAll.show
            },
            items: []
          }
        });
      };
      var item = JSON.parse(JSON.stringify(data.link));
      mod.all[data.position.origin.group].items.splice(data.position.origin.item, 1);
      mod.all[data.position.destination.group].items.splice(data.position.destination.item, 0, item);
    },
    group: function(data) {
      var group = JSON.parse(JSON.stringify(data.group));
      mod.all.splice(data.position.origin, 1);
      mod.all.splice(data.position.destination, 0, group);
    }
  };

  mod.remove = {
    link: function(data) {
      mod.all[data.position.origin.group].items.splice(data.position.origin.item, 1);
    },
    group: function(data) {
      mod.all.splice(data.position.origin, 1);
    }
  };

  mod.sort = function(by) {
    var action = {
      name: function(array) {
        return helper.sortObject(array, "display.name.text");
      },
      letter: function(array) {
        return helper.sortObject(array, "display.visual.letter.text");
      },
      icon: function(array) {
        return helper.sortObject(array, "display.visual.icon.name");
      }
    };
    mod.all.forEach(function(arrayItem, index) {
      arrayItem.items = action[by](arrayItem.items);
    });
  };

  mod.move = {
    link: function(data) {
      var item = JSON.parse(JSON.stringify(mod.all[data.position.origin.group].items[data.position.origin.item]));
      mod.all[data.position.origin.group].items.splice(data.position.origin.item, 1);
      mod.all[data.position.destination.group].items.splice(data.position.destination.item, 0, item);
    },
    group: function(data) {
      var group = JSON.parse(JSON.stringify(mod.all[data.position.origin]));
      mod.all.splice(data.position.origin, 1);
      mod.all.splice(data.position.destination, 0, group);
    }
  };

  mod.count = function() {
    var count = 0;
    mod.all.forEach(function(arrayItem, index) {
      count = count + arrayItem.items.length
    });
    return count;
  };

  var count = function() {
    return mod.count();
  };

  var get = function(data) {
    return mod.get(data);
  };

  var sort = function(by) {
    mod.sort(by);
  };

  var remove = {
    link: function(data) {
      mod.remove.link(data);
    },
    group: function(data) {
      mod.remove.group(data);
    }
  };

  var init = function() {
    if (data.load()) {
      mod.restore(data.load());
    };
  };

  // exposed methods
  return {
    init: init,
    mod: mod,
    get: get,
    sort: sort,
    count: count,
    remove: remove
  };

})();
