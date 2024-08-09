import "./bundle.js"

window.ml = window.pixelbin.createMediaLibrary(
    {
      //dev:true,
      cloud_name : "polished-hat-8f9bd4",
      //pixelbinURL : "https://local.pixelbinz0.de:9090",
      remove_header: true,
      max_files: "2",
      multiple : true,
      insert_caption: "Insert",
      inline_container: "#widget_container",
      default_transformations: [[]],
      button_class: "myBtn",
      button_caption: "Select Image or Video"
    },
    {
      insertHandler: function (data) {
        if(data && data.assets){
          data.assets.forEach( (asset) => {
            console.log("Inserted asset:", JSON.stringify(asset, null, 2));
          });
        }
        
      }
    },
    document.getElementById("open-btn")
  );
  