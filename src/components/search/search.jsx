import React from 'react'
import { Input } from 'antd'
import classNames from 'classnames'
import styled from 'styled-components'
const { Search: SearchAntd } = Input

export default function Search(props) {
    return (
        <SearchS
            className={classNames('Search', props.variant)}
            placeholder={props.placeholder}
            enterButton={props.enterButton}
            size="large"
            onSearch={props.onSearch}
        >
            {props.children}
        </SearchS>
    )
}

const SearchS = styled(SearchAntd)`
    &.Search {
        &.primary {
            width: 100%;
            input {
                &:focus {
                    border-color: #404145;
                    box-shadow: none;
                }
                &:hover {
                    border: 1px solid #d9d9d9;
                }
            }
            & button {
                background-color: #222325;
                box-shadow: 0;
                text-shadow: 0;
                border-color: transparent;
                &:hover {
                    background-color: #404145;
                }
                svg {
                    fill: #fff;
                }
            }
        }

        &.search_carousel {
            input {
                &:focus {
                    border-color: #d9d9d9;
                    box-shadow: none;
                }
                &:hover {
                    border: 1px solid #d9d9d9;
                }
            }
            button {
                background-color: #1dbf73;
                border-color: #1dbf73;
                font-weight: 600;
                box-shadow: none;
                &:hover {
                    background-color: #19a463;
                }
            }
        }
    }
`
