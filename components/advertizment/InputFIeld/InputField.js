import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import './styles.scss'

import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import { faBold, faItalic, faList, faListOl, faRedo, faUndo } from '@fortawesome/free-solid-svg-icons'

const MenuBar = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className='w-full h-10 border-[1px]'>
      <div className='w-1/2 h-full flex pl-3 items-center gap-4'>
        <button 
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={`${editor.isActive('bold') ? 'is-active' : ''} w-1/7`}
        >
          <FontAwesomeIcon icon={faBold}/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={`${editor.isActive('italic') ? 'is-active' : ''} w-1/7`}
        >
          <FontAwesomeIcon icon={faItalic}/>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={`${editor.isActive('strike') ? 'is-active' : ''} w-1/7`}
        >
          <p className='font-bold'>strike</p>
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} w-1/7`}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''} w-1/7`}
        >
          H2
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${editor.isActive('bulletList') ? 'is-active' : ''} w-1/7 `}
        >
          <FontAwesomeIcon icon={faList}/>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${editor.isActive('orderedList') ? 'is-active' : ''} w-1/7 `}
        >
          <FontAwesomeIcon icon={faListOl}/>
        </button>

        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
          className='w-1/7'
        >
          <FontAwesomeIcon icon={faUndo}/>
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
          className='w-1/7'
        >
          <FontAwesomeIcon icon={faRedo}/>
        </button>
      </div>
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
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
]

const content =()=>{
  return (
    <div className='w-full h-auto'>
      <div className='w-full h-32'>
        <input type="text"  className='h-full border-[2px] bg-[red]' placeholder='heeeleo' />
      </div>
    </div>
  )
}

export default () => {
  return (
    <div className='w-[95%] h-auto border-[2px]'>
      <div className='w-full h-[250px]'>
        <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
      </div>
    </div>
  )
}
