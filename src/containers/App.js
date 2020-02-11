import React from 'react'
import Footer from './Footer'
import AddTodo from '../components/AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Navbar from './../components/navbar'

const App = () => (
  <>
    <header>
        <Navbar />
    </header>
    <main>
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-3 col-6">
                        <AddTodo />
                        <VisibleTodoList />
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    </main>
  </>
)

export default App
