import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import {InputForm,AllNotes} from './components/Allcomponents.js'
import { store } from './store/store.js'
import {Provider} from 'react-redux'
import Home from './pages/Home.jsx'
import EditNote from './pages/EditNote.jsx'
import ViewNote from './pages/ViewNote.jsx'
import SignIn from './pages/SignInPage.jsx'
import Login from './pages/LoginPage.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import Policy from './pages/Policy.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:
        (<AuthLayout>
          <Home/>
        </AuthLayout>)
      },
      {
        path:"/all-notes",
        element:
        (
          <AuthLayout>
            <AllNotes/>
          </AuthLayout>
        ),
      },
      {
        path:"/edit/:id",
        element:
        (
          <AuthLayout>
            <EditNote/>
          </AuthLayout>
        )
      },
      {
        path:"/view-note/:id",
        element:(
          <AuthLayout>
            <ViewNote/>
          </AuthLayout>
        )
      },
      {
        path:"/signin",
        element:<SignIn/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/policy",
        element:<Policy/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
