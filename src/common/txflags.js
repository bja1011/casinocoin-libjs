'use strict' // eslint-disable-line strict

const txFlags = {
    // Universal flags can apply to any transaction type
    Universal: {
        FullyCanonicalSig: 0x80000000
    },

    AccountSet: {
        RequireDestTag: 0x00010000,
        OptionalDestTag: 0x00020000,
        RequireAuth: 0x00040000,
        OptionalAuth: 0x00080000,
        DisallowCSC: 0x00100000,
        AllowCSC: 0x00200000
    },

    TrustSet: {
        SetAuth: 0x00010000,
        NoCasinocoin: 0x00020000,
        SetNoCasinocoin: 0x00020000,
        ClearNoCasinocoin: 0x00040000,
        SetFreeze: 0x00100000,
        ClearFreeze: 0x00200000
    },

    OfferCreate: {
        Passive: 0x00010000,
        ImmediateOrCancel: 0x00020000,
        FillOrKill: 0x00040000,
        Sell: 0x00080000
    },

    Payment: {
        NoCasinocoinDirect: 0x00010000,
        PartialPayment: 0x00020000,
        LimitQuality: 0x00040000
    },

    PaymentChannelClaim: {
        Renew: 0x00010000,
        Close: 0x00020000
    },

    KYC: {
        KYCSet: 0x1000000
    }
}

// The following are integer (as opposed to bit) flags
// that can be set for particular transactions in the
// SetFlag or ClearFlag field
const txFlagIndices = {
    AccountSet: {
        asfRequireDest: 1,
        asfRequireAuth: 2,
        asfDisallowCSC: 3,
        asfDisableMaster: 4,
        asfAccountTxnID: 5,
        asfNoFreeze: 6,
        asfGlobalFreeze: 7,
        asfDefaultCasinocoin: 8
    }
}

module.exports = {
    txFlags,
    txFlagIndices
}