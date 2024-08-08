### Media-Library Widget Documentation

#### Overview
The Pixelbin Media-Library Widget provides a customizable media selector for web applications, enabling users to choose images or videos from Pixelbin's cloud-based storage. It offers extensive UI customization options and includes callback functions for seamless integration and further processing of selected media.

#### Prerequisites
- Ensure you have the following:
  - A valid Pixelbin cloud account and `cloud_name`
  - An HTML element in your DOM where the widget will be embedded

#### Installation
1. **Include the JavaScript Library**
   - Add the following script tag to include the `bundle.js` in your HTML file.
     ```html
     <script src="https://cdn.jsdelivr.net/gh/pixelbin-io/media-library-widget/dist/bundle.js"></script>
     ```

#### Configuration Options
The widget can be configured with the following options:

- `cloud_name`: (String) Your Pixelbin cloud account name.
- `remove_header`: (Boolean) Set true to remove the header from the widget.
- `max_files`: (String) Maximum number of files that can be selected.
- `insert_caption`: (String) Caption on the insert button.
- `inline_container`: (String) CSS selector for the container where the widget should be embedded.
- `default_transformations`: (Array) Default transformations to apply to selected media.
- `button_class`: (String) Additional CSS class for the button.
- `button_caption`: (String) Caption of the button to open the media library.

#### Callbacks
The widget allows passing callback functions to handle various events:

- `insertHandler`: Function called after media is selected. It receives an object containing selected media details.

#### Pixelbin Methods :- 
- `createMediaLibrary`: Initializes and returns a new media library widget instance.
- `openMediaLibrary`: This method allows for programmatically opening the media library widget, providing flexibility in how and when the widget is displayed.

#### Widget Instance Methods
- `show`: Displays the media library with optional configuration settings.
- `hide`: Hides the media library.


#### Example
```html
<div id="widget_container"></div>
<button id="open-btn" class="myBtn">Select Image or Video</button>

<script>
window.ml = window.pixelbin.createMediaLibrary(
  {
    cloud_name: "polished-hat-8f9bd4",
    remove_header: true,
    max_files: "1",
    insert_caption: "Insert",
    inline_container: "#widget_container",
    default_transformations: [[]],
    button_class: "myBtn",
    button_caption: "Select Image or Video"
  },
  {
    insertHandler: function(data) {
      if(data && data.assets) {
        data.assets.forEach(asset => {
          console.log("Inserted asset:", JSON.stringify(asset, null, 2));
        });
      }
    }
  },
  document.getElementById("open-btn")
);
</script>
```


## Demo

Run following commands:

```bash
npm install
npm run start
```
It will install dependencies and serve the included demo: `sample`.
The sample app should be available on `http://localhost:8080/`.