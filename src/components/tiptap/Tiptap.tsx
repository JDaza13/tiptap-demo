import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "./MenuBar";

import "./titap.scss";
import EditorJSONPreview from "./EditorJSONPreview";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure(),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Link.configure({
    autolink: true,
    linkOnPaste: true,
    defaultProtocol: "https",
    protocols: ["http", "https"],
  }),
  Image.configure({
    allowBase64: true,
    HTMLAttributes: {
      class: "editor-img",
      width: 640,
    },
  }),
];

const jsonContent = `{
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": {
        "level": 2
      },
      "content": [
        {
          "type": "text",
          "text": "Hi there,"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "this is a "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "italic"
            }
          ],
          "text": "basic"
        },
        {
          "type": "text",
          "text": " example of "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            }
          ],
          "text": "Tiptap"
        },
        {
          "type": "text",
          "text": ". Sure, there are all kind of basic text styles you'd probably expect from a text editor."
        }
      ]
    },
    {
      "type": "paragraph"
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            }
          ],
          "text": "styled"
        },
        {
          "type": "text",
          "text": " "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "textStyle",
              "attrs": {
                "color": "#958DF1"
              }
            }
          ],
          "text": "text"
        },
        {
          "type": "text",
          "text": " "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "strike"
            }
          ],
          "text": "example"
        },
        {
          "type": "hardBreak"
        },
        {
          "type": "hardBreak"
        },
        {
          "type": "text",
          "text": "Link example: "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "link",
              "attrs": {
                "href": "https://tiptap.dev/docs/editor/extensions/marks/link#install",
                "target": "_blank",
                "rel": "noopener noreferrer nofollow",
                "class": null
              }
            }
          ],
          "text": "https://tiptap.dev/docs/editor/extensions/marks/link#install"
        },
        {
          "type": "hardBreak"
        },
        {
          "type": "text",
          "text": "Another "
        },
        {
          "type": "text",
          "marks": [
            {
              "type": "link",
              "attrs": {
                "href": "https://tiptap.dev/docs/editor/extensions/marks/link#install",
                "target": "_blank",
                "rel": "noopener noreferrer nofollow",
                "class": null
              }
            }
          ],
          "text": "link example"
        }
      ]
    },
    {
      "type": "paragraph"
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "Image example:"
        },
        {
          "type": "hardBreak"
        },
        {
          "type": "hardBreak"
        }
      ]
    },
    {
      "type": "image",
      "attrs": {
        "src": "https://cdn.prod.website-files.com/661ed483a05a4dfff927326c/66603d6d99c46e87517c4c45_image%20(6)-p-1600.png",
        "alt": null,
        "title": null
      }
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "marks": [
            {
              "type": "bold"
            },
            {
              "type": "italic"
            }
          ],
          "text": "Feel free to add more things!"
        }
      ]
    }
  ]
}`;

const Tiptap = () => {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      extensions={extensions}
      content={JSON.parse(jsonContent)}
      editorContainerProps={{ className: "editor-container" }}
    >
      <span>Editor content as JSON:</span>
      <EditorJSONPreview />
    </EditorProvider>
  );
};

export default Tiptap;
