import * as utils from "./utils";
import { Connection } from "../common";
import { TrustlinesOptions, Trustline } from "./trustlines-types";

const { validate } = utils.common;

type Balance = {
  value: string,
  currency: string,
  counterparty?: string,
};

type GetBalances = Balance[];

function getTrustlineBalanceAmount(trustline: Trustline) {
  return {
    counterparty: trustline.specification.counterparty,
    currency: trustline.specification.currency,
    value: trustline.state.balance,
  };
}

function formatBalances(options: any, balances: any) {
  const result = balances.trustlines.map(getTrustlineBalanceAmount);
  if (!(options.counterparty ||
    (options.currency && options.currency !== "CSC")
  )) {
    const cscBalance = {
      currency: "CSC",
      value: balances.csc,
    };
    result.unshift(cscBalance);
  }
  if (options.limit && result.length > options.limit) {
    const toRemove = result.length - options.limit;
    result.splice(-toRemove, toRemove);
  }
  return result;
}

function getLedgerVersionHelper(
  connection: Connection,
  optionValue?: number,
): Promise<number> {
  if (optionValue !== undefined && optionValue !== null) {
    return Promise.resolve(optionValue);
  }
  return connection.getLedgerVersion();
}

function getBalances(
  address: string,
  options: TrustlinesOptions = {},
): Promise<GetBalances> {
  validate.getTrustlines({ address, options });

  return Promise.all([
    getLedgerVersionHelper(this.connection, options.ledgerVersion).then(
      (ledgerVersion) =>
        utils.getCSCBalance(this.connection, address, ledgerVersion)),
    this.getTrustlines(address, options),
  ]).then((results) =>
    formatBalances(options, { csc: results[0], trustlines: results[1] }));
}

export default getBalances;
