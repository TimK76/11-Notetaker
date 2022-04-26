const router = require('express').Router();

// const {show, hide, getNotes, saveNote, deleteNote, renderActiveNote, handleNoteSave, handleNoteDelete, handleNoteView, handleNewNoteView, handleRenderSaveBtn, renderNoteList, createLi, getAndRenderNotes } = require('../lib/notes')

router.get('/', (req, res) => {
    res.send('../public/index.html')
})
router.get('../public/notes.html', (req, res) => {
    res.send('../db/db')
})


module.exports = router;
