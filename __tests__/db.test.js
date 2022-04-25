const fs = require('fs');
const createNewNote = require('../lib/notes.js');

jest.mock('fs');

test('creates a note', () => {
    const note = createNewNote({ title: 'New Note Title', text: 'New Note Text' }, []);
    
    expect(note.title).toBe('New Note Title')
    expect(note.text).toBe('New Note Text');
});

