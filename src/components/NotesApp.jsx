import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getInitialData } from '../utils/data';
import AppBody from './Body';
import Header from './Header';

import 'react-toastify/dist/ReactToastify.min.css';
import Footer from './Footer';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData() 
        }
        this.addNewNoteHandler = this.addNewNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    addNewNoteHandler(newNoteData) {
        try {
            this.setState((prevState) => {
                return {
                    notes: [
                        ...prevState.notes,
                        newNoteData
                    ]
                }
            })
            return {
                error: false,
                message: 'Success!'
            }
        }
        catch (error) {
            return {
                error: true,
                message: 'Failed!'
            }
        }
    }

    onDeleteHandler(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.filter(note => note.id !== id)
            }
        })
        toast.success('Note deleted!');
    }

    onArchiveHandler(id) {
        const noteToModify = this.state.notes.filter(note => note.id === id)[0];
        const modifiedNote = { ...noteToModify, archived: !noteToModify.archived };
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes.filter(note => note.id !== id),
                    modifiedNote
                ]
            }
        });
        if (noteToModify.archived) {
            toast.success('Note moved to active!');
        } else {
            toast.success('Note archived!');
        }
    }

    onSearchHandler(text) {
        if (text.length !== 0 && text.trim() !== '') {
            this.setState({
                notes: getInitialData().filter(note => note.title.toLowerCase().includes(text.toLowerCase())),
            })
        } else {
            this.setState({
                notes: getInitialData(),
            })
        }
    }
    
    render() {
        return (
            <div>
                <Header onSearch={this.onSearchHandler}/>
                <AppBody notes={this.state.notes} addNewNote={this.addNewNoteHandler} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                <Footer />
                <ToastContainer 
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        )
    }
}

export default NotesApp;