import styled from 'styled-components'

export const ContainerModalAddEditFilm = styled.div`
    .modal-header{
        display: flex;
        justify-content: flex-end;
        > i{
            cursor: pointer;
        }
    }
    .modal-body > form{
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        input[type = text]{
            width: 100%;
            padding: 0.3rem;
            border-radius: 0.5rem;
            border: 0;
            background-color: whitesmoke;
            margin: 0.5rem 0;
        }
        textarea{
            width: 100%;
            border-radius: 0.5rem;
            border: 0;
            background-color: whitesmoke;
        }
        .upload-btn-wrapper{
            overflow: hidden;
            position: relative;
            height: 3rem;
            margin-top: 1rem;
            > input{
                position: absolute;
                opacity: 0;
                top: 0;
                bottom: 0;
                left: 0;
            }
            .btn-file{
                font-size: 1rem;
                color: #1E1E1E;
                background-color: white;
                padding: 0.3rem;
                border-radius: 0.3rem;
                border: 1px solid #1E1E1E;
                :hover{
                    background-color: red;
                }
            }
            i{
                display: none;
            }
            .activeFile{
                display: inline;
                color: green;
            }
        }
        

        > button{
            padding: 0.3rem;
            margin-top: 1.5rem;
            border-radius: 0.5rem;
            border: none;
            background-color: cadetblue;
            color: white;
            font-size: 1.2rem;
        }
    }
`