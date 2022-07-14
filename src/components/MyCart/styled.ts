import styled from "styled-components";

export const Container = styled.div`

    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:2rem;

    header{
        width:95%;
        max-width: 800px;
        padding: 0 1.5rem;
        a{  
            display: inline-flex;
            background-color:#0686e1;
            margin-right:.25rem;
            padding:.75rem 1rem;
            color: #fff;
            font-weight: bold;
            text-decoration: none;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            &:hover{
                filter:brightness(0.8)
                }
        }
    }

    .container{
        box-shadow: 5px 5px 15px #c9c9c9;
        width:95%;
        max-width: 800px;
        background: #fff;
        display:flex;
        flex-direction:column;
        align-items:start;
        border-radius: 2rem;
 
        header{
            width: 100%;
            padding:1rem;
            text-align:center;
            border-bottom:1px solid #c9c9c9;
            font-size: 2rem;
            font-weight: bold;
        }
        main{
         
            width: 100%;
            ul{
                padding:0 2rem;
                width: 100%;
                border-bottom:1px solid #c9c9c9;
                li{
                    display:flex;
                    align-items: start;
                    justify-content:start;
                    margin: 1rem 0;
                    main{
                        width:8rem;
                        height:8rem;
                        min-width:100px;
                        min-height:100px;
                        border:1px solid #c9c9c9;
                        overflow: hidden;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        img{
                        width:7rem;
                        min-width: 90px;
                        }
                    }
                    div{
                        padding: 1rem;
                        h3{
                            font-size:1.1rem;
                            font-weight: bolder;
                        }
                        small{
                            display: inline-block;
                            color:#817d7d;
                            margin:.25rem 0;
                        }
                        p{
                            font-weight: bold;
                            font-size: 0.9;
                        }
                    }
                }
            }
        }
        footer{
            width: 100%;
            display:flex;
            flex-direction: column;
            align-items:center;
        
            div{
                width: 100%;
                display:flex;
                flex-direction: column;
                align-items:center;
                border-bottom:1px solid #c9c9c9;
                margin-bottom: .5rem;
                padding:1rem 2rem;
                article{
                    
                display: flex;
                width: 100%;
                justify-content:space-between;
                font-size: 1.5rem;
                font-weight: bold;
             
                }
                span{
                    color: green;
                    text-align: center;
                    background-color:#c1ffc1;
                    margin-top: 1rem;
                    width: 90%;
                    padding: 1rem;
                    border-radius: 2rem;
                    font-weight: bold;
                    font-size: 1.2rem;
                }
            }
            button{
         
                margin:1rem;
                width: 90%;
                height:3rem;
                border:0px;
                border-radius: .45rem;
                background-color:#0686e1;
                font-size: 1.5rem;
                color: #fff;
                transition: all 0.5s;
                &:hover{
                filter:brightness(0.8)
                }
            }
        }
    }

`