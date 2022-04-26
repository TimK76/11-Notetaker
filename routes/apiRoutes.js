const router = require('express').Router();

const {show, hide, getNotes, saveNote, deleteNote, renderActiveNote, handleNoteSave, ahndleNoteDelete, handleNoteView, handleNewNoteView, handleRenderSaveBtn, renderNoteList, createLi, getAndRenderNotes } = require('../lib/notes')
module.exports = router;
