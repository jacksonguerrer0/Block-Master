import styled from 'styled-components'


export const ContainerCard = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 150px);
    gap: 1rem;
    .card{
        border-radius: 8px;
        height: 250px;
        width: 150px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .pegatin{
            display: -webkit-box;
            align-items: center;
            background-color: rgb(45 44 53 / 78%);;
            border: 2px solid var(--primary);
            width: 6rem;
            height: 2.9rem;
            margin-top: 24px;
            padding: 5px;
            border-radius: 0 30px 30px 0;
            border-left: none;
            h4{
                font-size: 1.2rem;
            }
        }
    }
    @media screen and (min-width: 700px){
        grid-template-columns: repeat(auto-fill, 180px);
        .card{
            height: 250px;
            width: 180px;
        }
    }
    @media screen and (min-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(180px, 190px));
        .card{
            height: 250px;
            width: 190px;
        }
    }
`

