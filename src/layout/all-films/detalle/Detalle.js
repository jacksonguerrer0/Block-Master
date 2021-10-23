import styled from 'styled-components'

export const ContainerModal = styled.div`
    > div{
        background-color: #0009 !important;
    }
.modal-content{
    background-color: transparent !important;
    border: none;
}
.modal-header{
    border: none;
    >* {
        cursor: pointer;
    }
}
.fa-times{
    position: absolute;
    right: 0;
    color: var(--white);
    font-size: 40px;
}

.modal-body{
    padding: 0;
}
.containerImg{
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        transition: transform 0.8s ease-in-out;
        z-index: 100;
        transform: perspective(700px) rotateY(30deg);
    &:hover{
        transform: perspective(700px) rotateY(-30deg);
    }
    }
}
.imgDetalle{
    width: 200px;
    height: 300px;
    border-radius: 1rem;
    transform: matrix3d(2rem, 3rem ,4rem);
}

.textDetalle{
    display: flex;
    flex-flow: column wrap;
    padding: 1rem;
    justify-content: center;
    h2{
        margin: 0;
        text-align: center;
    }
    span{
        text-align: right;
    }
}
.containerButtonDe{
    display: flex;
    width: 100%;
    justify-content: center;
    position: inherit;
    align-self: flex-end;
}
.ButtonDetalle{
    width: 47%;
    padding: 0.4rem;
}
.secondary{
    width: auto;
}

@media all and (min-width: 1024px ) {
    .modal-body{
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
    .textDetalle{
    h2{
        text-align: left;
    }
    }
}
`