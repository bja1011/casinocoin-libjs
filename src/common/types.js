/* @flow */
'use strict' // eslint-disable-line strict

export type CasinocoindAmountIOU = {
    currency: string,
    value: string,
    issuer ? : string
}

export type CasinocoindAmount = string | CasinocoindAmountIOU


export type Amount = {
    value: string,
    currency: string,
    counterparty ? : string
}


// Amount where counterparty and value are optional
export type LaxLaxAmount = {
    currency: string,
    value ? : string,
    counterparty ? : string
}

// A currency-counterparty pair, or just currency if it's CSC
export type Issue = {
    currency: string,
    counterparty ? : string
}

export type Adjustment = {
    address: string,
    amount: Amount,
    tag ? : number
}

export type MaxAdjustment = {
    address: string,
    maxAmount: Amount,
    tag ? : number
}

export type MinAdjustment = {
    address: string,
    minAmount: Amount,
    tag ? : number
}

export type Memo = {
    type ? : string,
    format ? : string,
    data ? : string
}