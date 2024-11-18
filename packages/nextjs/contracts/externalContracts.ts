import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
    421_614: {
        COUNTER: {
            address: "0x076fea662e5981f1efd30ffc49a640090f158b17",
            abi: [
                {
                    "inputs": [],
                    "name": "increment",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "name": "number",
                    "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "new_number",
                        "type": "uint256"
                    }
                    ],
                    "name": "setNumber",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ]
        }
    }
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
