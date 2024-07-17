// User authentication and login
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

loginBtn.addEventListener('click', () => {
    // Implement login logic here
    console.log('Login button clicked');
    // Show logout button and hide login button
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
});

logoutBtn.addEventListener('click', () => {
    // Implement logout logic here
    console.log('Logout button clicked');
    // Show login button and hide logout button
    loginBtn.style.display = 'block';
    logoutBtn.style.display = 'none';
});

// Creating a new note
const createNoteBtn = document.getElementById('create-note-btn');
const noteTitleInput = document.getElementById('note-title');
const noteContentInput = document.getElementById('note-content');

createNoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const noteTitle = noteTitleInput.value;
    const noteContent = noteContentInput.value;
    // Implement create note logic here
    console.log(`Creating new note: ${noteTitle} - ${noteContent}`);
    // Clear input fields
    noteTitleInput.value = '';
    noteContentInput.value = '';
});

// Displaying all notes
const notesList = document.getElementById('notes');

// Implement fetch notes logic here
const notes = [
    { id: 1, title: 'Note 1', content: 'This is note 1' },
    { id: 2, title: 'Note 2', content: 'This is note 2' },
    { id: 3, title: 'Note 3', content: 'This is note 3' },
];

notes.forEach((note) => {
    const noteListItem = document.createElement('li');
    noteListItem.textContent = note.title;
    notesList.appendChild(noteListItem);
});

// Searching notes
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    // Implement search notes logic here
    console.log(`Searching for notes with term: ${searchTerm}`);
    // Filter notes list
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(searchTerm) || note.content.toLowerCase().includes(searchTerm);
    });
    // Update notes list
    notesList.innerHTML = '';
    filteredNotes.forEach((note) => {
        const noteListItem = document.createElement('li');
        noteListItem.textContent = note.title;
        notesList.appendChild(noteListItem);
    });
});

// Displaying notes for a specific label
const labelsList = document.getElementById('labels-list');

// Implement fetch labels logic here
const labels = [
    { id: 1, name: 'Label 1' },
    { id: 2, name: 'Label 2' },
    { id: 3, name: 'Label 3' },
];

labels.forEach((label) => {
    const labelListItem = document.createElement('li');
    labelListItem.textContent = label.name;
    labelsList.appendChild(labelListItem);
});

// Displaying archived notes
const archivedNotesList = document.getElementById('archived-notes-list');

// Implement fetch archived notes logic here
const archivedNotes = [
    { id: 1, title: 'Archived Note 1', content: 'This is archived note 1' },
    { id: 2, title: 'Archived Note 2', content: 'This is archived note 2' },
];

archivedNotes.forEach((note) => {
    const noteListItem = document.createElement('li');
    noteListItem.textContent = note.title;
    archivedNotesList.appendChild(noteListItem);
});

// Displaying trashed notes
const trashedNotesList = document.getElementById('trashed-notes-list');

// Implement fetch trashed notes logic here
const trashedNotes = [
    { id: 1, title: 'Trashed Note 1', content: 'This is trashed note 1' },
    { id: 2, title: 'Trashed Note 2', content: 'This is trashed note 2' },
];

trashedNotes.forEach((note) => {
    const noteListItem = document.createElement('li');
    noteListItem.textContent = note.title;
    trashedNotesList.appendChild(noteListItem);
});

// Restoring a trashed note
const restoreNoteBtn = document.getElementById('restore-note-btn');

restoreNoteBtn.addEventListener('click', () => {
    // Implement restore note logic here
    console.log('Restoring trashed note');
});

// Toggling background colors for a note
const noteListItems = document.querySelectorAll('#notes li');

noteListItems.forEach((noteListItem) => {
    noteListItem.addEventListener('click', () => {
        // Toggle background color
        noteListItem.classList.toggle('selected');
    });
});