import React, { useState, useEffect } from "react";
import "../styles/my-journal.css";

export default function MyJournal() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load saved entries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("myJournalEntries");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  // Save entries to localStorage on change
  useEffect(() => {
    localStorage.setItem("myJournalEntries", JSON.stringify(entries));
  }, [entries]);

  function handleSave() {
    if (entry.trim() === "") return;

    const timestamp = new Date().toISOString();

    if (editIndex !== null) {
      // Editing existing entry
      const updatedEntries = [...entries];
      updatedEntries[editIndex] = { text: entry, timestamp };
      setEntries(updatedEntries);
      setEditIndex(null);
    } else {
      // Adding new entry
      setEntries([{ text: entry, timestamp }, ...entries]);
    }

    setEntry("");
  }

  function handleEdit(index) {
    setEntry(entries[index].text);
    setEditIndex(index);
  }

  function handleDelete(index) {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      const updatedEntries = entries.filter((_, i) => i !== index);
      setEntries(updatedEntries);
      // If deleting the one you are editing
      if (editIndex === index) {
        setEntry("");
        setEditIndex(null);
      }
    }
  }

  function formatDate(isoString) {
    const date = new Date(isoString);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
     
    <section className="my-journal-section" id="myjournal">
      <h2>📝 My Journal</h2>
      <textarea
        className="journal-textarea"
        placeholder="Pen down your thoughts, emotions, and personal reflections . . . ."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        rows={6}
      />
      <button onClick={handleSave}>{editIndex !== null ? "Update Entry" : "Save Entry"}</button>

      <div className="saved-entries">
        {entries.length === 0 ? (
          <p>No journal entries yet.</p>
        ) : (
          entries.map(({ text, timestamp }, i) => (
            <div key={i} className="journal-entry">
              <div className="entry-header">
                <small>{formatDate(timestamp)}</small>
                <div className="entry-actions">
                  <button onClick={() => handleEdit(i)}>Edit</button>
                  <button onClick={() => handleDelete(i)}>Delete</button>
                </div>
              </div>
              <p>{text}</p>
            </div>
          ))
        )}
      </div>
    </section>
 
  );
}
