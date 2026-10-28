
 *  Executing task: npm run test:dbrix


> @dbrix/test-suite@0.1.0 test:dbrix
> node --env-file=.env ./node_modules/vitest/vitest.mjs run --reporter=verbose --silent=false test/dbrix-roundtrip.spec.ts


 RUN  v1.6.1 C:/Users/codepara/Desktop/packages/drix

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > logs and verifies the local Core and Ledger stages using Core test data
[Core input record] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "1111111111111111111111111111111111111111111111111111111111111111",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2222222222222222222222222222222222222222222222222222222222222222",
  "newCommitment": "3333333333333333333333333333333333333333333333333333333333333333",
  "sequence": "2",
  "policyCommitment": "4444444444444444444444444444444444444444444444444444444444444444",
  "gpruScopeCommitment": "5555555555555555555555555555555555555555555555555555555555555555",
  "nullifier": "6666666666666666666666666666666666666666666666666666666666666666",
  "dnaKeyCommitment": "7777777777777777777777777777777777777777777777777777777777777777"
}
[Core encrypted envelope] {
  "data": "3Q/Xj0Bpc3vX7YZbbH7S9oMh5cwo7vymWuaXkg5jUm0c94KMGR1lYs2bbQarRX022A6yhZuddxj4MLtmqeEr2JSbbqrBm8ihjog7+hgVmNUpWzaB+8bjJV9sc0eRTMqF7QV6XFP7hDBIRhZwUjWVjUDKvhMQJgLP2o84F07wSXTvVI3IxQwPHRA+BoAMdDTO5gTByHaRve6vvXfMZqq9w/5A3P3yXOq3K6X2/wLsefd/884S13HkMz5J0hXTVaHFVScb32qjmDp4pPQ4qWQJIy7RAYEouNn3t3xvGmqsmYNOaOc2/bco5H7cu4zOBA9F0kqhNGM1v3wqLu03GhAbdOSJMOE/T3pA5m+DRtYF9fCON/ccxsrKZM5HjHOyZG2Gmtw20VloIMhrjUbanuJk/9w3T2y9QUTurUS8kiBtiuh2LFEnY+d0cngfd2lEuL32evRw36O33oRRzgKi0mpE57wOdFiVubrXJ2vETZJjI02Pq6RNZA2NIXj81lMr8UGncIV4ZrloLp3C5bMViW3lbDafUcvbGP1iDIYQKtSIaoC/yQgxkBMLju8uYY/uqelF+8IInDfoMq+OK3thrMcJzER8bpyu0ZIj2HDiRTdah546giTJxs0csz9JjZVM1/o07TZoqEE948wH0+XsFmFGAut47LU0TRqNVHsw0NY1soWzGle3OZFZmwJ0ee2fp+64iDHAmgttMxIEet9nqglIF/CbPZ09guDv83/yeSO4NP9+xa2rcZkmeodECQlNPiYspNUMMUlfRt3s3X+sDNBOB5R+9Fz8n0nJJ/cb+aHOSsPCSKd4v6O6HDTW8ek6TU2m+NNJpDZlAocVsHaWeJDhC3VYRl5bXNPks/XD0leuFMfz//1bvFazvoJiPYO6s6RAhEEZ4c9P/c6TSYiNobADSBtrQ9mfA6PyZKP0cAOvDjAcq6taxa3MNAlnF9egnSyL1BSeCGwZFJeLb93otq1d5kM/5KzU5M0C52Q5wKo2SowAwhz1TQtYu3MYouv5UAQmW6cbmzC6jcPUuV86KSQSXLfSq65q/DKEPrlCGTUS0OgFxOytRm+gTVvmKPiAIuHygrMDZ4WJbL4le38XsXaVMhXYczusT2K8r8G8MFUEqkLVz8YjWw==",
  "nonce": "vOnwgtto0C75okO8w1VgbJyvSrpm+0AF"
}
[Core envelope serialized] 1194 bytes.
[Ledger Base64URL slots] [
  "eyJkYXRhIjoiM1EvWGowQnBjM3ZYN1la",
  "YmJIN1M5b01oNWN3bzd2eW1XdWFYa2c1",
  "alVtMGM5NEtNR1IxbFlzMmJiUWFyUlgw",
  "MjJBNnloWnVkZHhqNE1MdG1xZUVyMkpT",
  "YmJxckJtOGloam9nNytoZ1ZtTlVwV3ph",
  "Qis4YmpKVjlzYzBlUlRNcUY3UVY2WEZQ",
  "N2hEQklSaFp3VWpXVmpVREt2aE1RSmdM",
  "UDJvODRGMDd3U1hUdlZJM0l4UXdQSFJB",
  "K0JvQU1kRFRPNWdUQnlIYVJ2ZTZ2dlhm",
  "TVpxcTl3LzVBM1AzeVhPcTNLNlgyL3dM",
  "c2VmZC84ODRTMTNIa016NUowaFhUVmFI",
  "RlZTY2IzMnFqbURwNHBQUTRxV1FKSXk3",
  "UkFZRW91Tm4zdDN4dkdtcXNtWU5PYU9j",
  "Mi9iY281SDdjdTR6T0JBOUYwa3FoTkdN",
  "MXYzd3FMdTAzR2hBYmRPU0pNT0UvVDNw",
  "QTVtK0RSdFlGOWZDT04vY2N4c3JLWk01",
  "SGpIT3laRzJHbXR3MjBWbG9JTWhyalVi",
  "YW51SmsvOXczVDJ5OVFVVHVyVVM4a2lC",
  "dGl1aDJMRkVuWStkMGNuZ2ZkMmxFdUwz",
  "MmV2UnczNk8zM29SUnpnS2kwbXBFNTd3",
  "T2RGaVZ1YnJYSjJ2RVRaSmpJMDJQcTZS",
  "TlpBMk5JWGo4MWxNcjhVR25jSVY0WnJs",
  "b0xwM0M1Yk1WaVczbGJEYWZVY3ZiR1Ax",
  "aURJWVFLdFNJYW9DL3lRZ3hrQk1ManU4",
  "dVlZL3VxZWxGKzhJSW5EZm9NcStPSzN0",
  "aHJNY0p6RVI4YnB5dTBaSWoySERpUlRk",
  "YWg1NDZnaVRKeHMwY3N6OUpqWlZNMS9v",
  "MDdUWm9xRUU5NDh3SDArWHNGbUZHQXV0",
  "NDdMVTBUUnFOVkhzdzBOWTFzb1d6R2xl",
  "M09aRlptd0owZWUyZnArNjRpREhBbWd0",
  "dE14SUVldDlucWdsSUYvQ2JQWjA5Z3VE",
  "djgzL3llU080TlA5K3hhMnJjWmttZW9k",
  "RUNRbE5QaVlzcE5VTU1VbGZSdDNzM1gr",
  "c0ROQk9CNVIrOUZ6OG4wbkpKL2NiK2FI",
  "T1NzUENTS2Q0djZPNkhEVFc4ZWs2VFUy",
  "bStOTkpwRFpsQW9jVnNIYVdlSkRoQzNW",
  "WVJsNWJYTlBrcy9YRDBsZXVGTWZ6Ly8x",
  "YnZGYXp2b0ppUFlPNnM2UkFoRUVaNGM5",
  "UC9jNlRTWWlOb2JBRFNCdHJROW1mQTZQ",
  "eVpLUDBjQU92RGpBY3E2dGF4YTNNTkFs",
  "bkY5ZWduU3lMMUJTZUNHd1pGSmVMYjkz",
  "b3RxMWQ1a00vNUt6VTVNMEM1MlE1d0tv",
  "MlNvd0F3aHoxVFF0WXUzTVlvdXY1VUFR",
  "bVc2Y2JtekM2amNQVXVWODZLU1FTWExm",
  "U3E2NXEvREtFUHJsQ0dUVVMwT2dGeE95",
  "dFJtK2dUVnZtS1BpQUl1SHlnck1EWjRX",
  "SmJMNGxlMzhYc1hhVk1oWFljenVzVDJL",
  "OHI4RzhNRlVFcWtMVno4WWpXdz09Iiwi",
  "bm9uY2UiOiJ2T253Z3R0bzBDNzVva084",
  "dzFWZ2JKeXZTcnBtKzBBRiJ9========"
]
[Ledger Memo payload] eyJkYXRhIjoiM1EvWGowQnBjM3ZYN1laYmJIN1M5b01oNWN3bzd2eW1XdWFYa2c1alVtMGM5NEtNR1IxbFlzMmJiUWFyUlgwMjJBNnloWnVkZHhqNE1MdG1xZUVyMkpTYmJxckJtOGloam9nNytoZ1ZtTlVwV3phQis4YmpKVjlzYzBlUlRNcUY3UVY2WEZQN2hEQklSaFp3VWpXVmpVREt2aE1RSmdMUDJvODRGMDd3U1hUdlZJM0l4UXdQSFJBK0JvQU1kRFRPNWdUQnlIYVJ2ZTZ2dlhmTVpxcTl3LzVBM1AzeVhPcTNLNlgyL3dMc2VmZC84ODRTMTNIa016NUowaFhUVmFIRlZTY2IzMnFqbURwNHBQUTRxV1FKSXk3UkFZRW91Tm4zdDN4dkdtcXNtWU5PYU9jMi9iY281SDdjdTR6T0JBOUYwa3FoTkdNMXYzd3FMdTAzR2hBYmRPU0pNT0UvVDNwQTVtK0RSdFlGOWZDT04vY2N4c3JLWk01SGpIT3laRzJHbXR3MjBWbG9JTWhyalViYW51SmsvOXczVDJ5OVFVVHVyVVM4a2lCdGl1aDJMRkVuWStkMGNuZ2ZkMmxFdUwzMmV2UnczNk8zM29SUnpnS2kwbXBFNTd3T2RGaVZ1YnJYSjJ2RVRaSmpJMDJQcTZSTlpBMk5JWGo4MWxNcjhVR25jSVY0WnJsb0xwM0M1Yk1WaVczbGJEYWZVY3ZiR1AxaURJWVFLdFNJYW9DL3lRZ3hrQk1ManU4dVlZL3VxZWxGKzhJSW5EZm9NcStPSzN0aHJNY0p6RVI4YnB5dTBaSWoySERpUlRkYWg1NDZnaVRKeHMwY3N6OUpqWlZNMS9vMDdUWm9xRUU5NDh3SDArWHNGbUZHQXV0NDdMVTBUUnFOVkhzdzBOWTFzb1d6R2xlM09aRlptd0owZWUyZnArNjRpREhBbWd0dE14SUVldDlucWdsSUYvQ2JQWjA5Z3VEdjgzL3llU080TlA5K3hhMnJjWmttZW9kRUNRbE5QaVlzcE5VTU1VbGZSdDNzM1grc0ROQk9CNVIrOUZ6OG4wbkpKL2NiK2FIT1NzUENTS2Q0djZPNkhEVFc4ZWs2VFUybStOTkpwRFpsQW9jVnNIYVdlSkRoQzNWWVJsNWJYTlBrcy9YRDBsZXVGTWZ6Ly8xYnZGYXp2b0ppUFlPNnM2UkFoRUVaNGM5UC9jNlRTWWlOb2JBRFNCdHJROW1mQTZQeVpLUDBjQU92RGpBY3E2dGF4YTNNTkFsbkY5ZWduU3lMMUJTZUNHd1pGSmVMYjkzb3RxMWQ1a00vNUt6VTVNMEM1MlE1d0tvMlNvd0F3aHoxVFF0WXUzTVlvdXY1VUFRbVc2Y2JtekM2amNQVXVWODZLU1FTWExmU3E2NXEvREtFUHJsQ0dUVVMwT2dGeE95dFJtK2dUVnZtS1BpQUl1SHlnck1EWjRXSmJMNGxlMzhYc1hhVk1oWFljenVzVDJLOHI4RzhNRlVFcWtMVno4WWpXdz09Iiwibm9uY2UiOiJ2T253Z3R0bzBDNzVva084dzFWZ2JKeXZTcnBtKzBBRiJ9
[Core decrypted result] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "1111111111111111111111111111111111111111111111111111111111111111",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2222222222222222222222222222222222222222222222222222222222222222",
  "newCommitment": "3333333333333333333333333333333333333333333333333333333333333333",
  "sequence": "2",
  "policyCommitment": "4444444444444444444444444444444444444444444444444444444444444444",
  "gpruScopeCommitment": "5555555555555555555555555555555555555555555555555555555555555555",
  "nullifier": "6666666666666666666666666666666666666666666666666666666666666666",
  "dnaKeyCommitment": "7777777777777777777777777777777777777777777777777777777777777777"
}
[Local round trip] PASS: Core data survived Ledger encoding and decoded correctly.

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
[1/6 Core encrypt] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "1111111111111111111111111111111111111111111111111111111111111111",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2222222222222222222222222222222222222222222222222222222222222222",
  "newCommitment": "3333333333333333333333333333333333333333333333333333333333333333",
  "sequence": "2",
  "policyCommitment": "4444444444444444444444444444444444444444444444444444444444444444",
  "gpruScopeCommitment": "5555555555555555555555555555555555555555555555555555555555555555",
  "nullifier": "6666666666666666666666666666666666666666666666666666666666666666",
  "dnaKeyCommitment": "7777777777777777777777777777777777777777777777777777777777777777"
}
[1/6 Core encrypted envelope] {
  "data": "Q4aReVC4FZ9dOwwrpcEUXgvcIyMRyilKzFwL/DsT+uUPSU9qbfYCTqU9/xbC2Cs1zOG1W5Ii9ashi1kerc78UF8nDVbIX0sikJBrbckdLUrETtFUk/3uVpik5nkYlwAu2q81cCXW+Ne98L5wVuelBkFct+aGiFDIhXbCXJtEk5kWGpsLWCa8LtvbuppmKcqx5rpT1OCc0RiRV0KHqaB2wIRF42N5lt69K6EbLXNie64kkUiZI32mTivR6vd7jlniKLTe3q9UyQabjIWb21tPoq14XkW8pzmVDRfMyoddoXYkVXVYEfH/5gVKnUAeZxPneJEfRFTtI0G3oucMK+q+p5UckujfBOBDqCMagFpNAomywFwnM8IQoJqLjLup9+35llVvoJX6S0m2mjzVf4CIzMgZm6PzM7L4+uTVr56j2XVVlJSYxlUVqmVBV1EGri99t0zMGdXdTosFtGNyfkOImLYCyEqA7Lic952+kwoEgdnjB3YzrBPrQi5CJbO1DnIUDRYyiegJSgfYmbZIRUJxIF8kuDnKC7AgWyqPZWq4ZXuMYwWlMDdVND0olIAHDb6NJqno4kJNcpl1qxYsrSDgllJrQbOqvA6J9qE+8C2Omm0hSyVdYKMvFeif7Mzij0y1t7qDiTrDwsiQCgVYuD12SStpOD2CNpoDo6NrPCuThCmMWaKHsd7Y4W6cHf8njeGhsYuWFukHoAR5wm1IsvCGZmLms38J3e3QX1vMW9+zmiPVFkeTvkRc0WIpOEI7yYlt9gF1l6rHX9B6zrU/qVd97eoxYwQgK3eXEcGG0FXWcj5QELF0/JOg3gsbJP6/jJigui8cvBOXsTInn3PngQSSdpZLnbZBzVOOttgYDb4ajI9K7ajZHMxv16+YnIT5UNMl2n21rvy/moDD8Akp4O+qchfadwwrPUnu4k0dSBwYTbuPi2DOMJKI8PLw6M5mNS0UdaxnGpDV5ys6p3+UVY1V2CLbHWOHQBRoKawKrfFMcYoXkio3fxC5u7Sh9APLCPxbeW/7UTnSRlAslFQrRWNBpoID0r3sSmh8RcbOlNzpGl+oTvuft69utpnK9BvT2xJv2Q/ZtZPUVQleha4AT16PppaQn5mZf6hDM5H1rRfg7aK92MQxOQ==",
  "nonce": "2UX+MVQ2xmFTwQj91N7kkOUXI0XgfIbE"
}
[2/6 Ledger encode] Building Base64URL slots from the encrypted envelope.
[2/6 Ledger slots] [
  "eyJkYXRhIjoiUTRhUmVWQzRGWjlkT3d3",
  "cnBjRVVYZ3ZjSXlNUnlpbEt6RndML0Rz",
  "VCt1VVBTVTlxYmZZQ1RxVTkveGJDMkNz",
  "MXpPRzFXNUlpOWFzaGkxa2VyYzc4VUY4",
  "bkRWYklYMHNpa0pCcmJja2RMVXJFVHRG",
  "VWsvM3VWcGlrNW5rWWx3QXUycTgxY0NY",
  "VytOZTk4TDV3VnVlbEJrRmN0K2FHaUZE",
  "SWhYYkNYSnRFazVrV0dwc0xXQ2E4THR2",
  "YnVwcG1LY3F4NXJwVDFPQ2MwUmlSVjBL",
  "SHFhQjJ3SVJGNDJONWx0NjlLNkViTFhO",
  "aWU2NGtrVWlaSTMybVRpdlI2dmQ3amxu",
  "aUtMVGUzcTlVeVFhYmpJV2IyMXRQb3Ex",
  "NFhrVzhwem1WRFJmTXlvZGRvWFlrVlhW",
  "WUVmSC81Z1ZLblVBZVp4UG5lSkVmUkZU",
  "dEkwRzNvdWNNSytxK3A1VWNrdWpmQk9C",
  "RHFDTWFnRnBOQW9teXdGd25NOElRb0px",
  "TGpMdXA5KzM1bGxWdm9KWDZTMG0ybWp6",
  "VmY0Q0l6TWdabTZQek03TDQrdVRWcjU2",
  "ajJYVlZsSlNZeGxVVnFtVkJWMUVHcmk5",
  "OXQwek1HZFhkVG9zRnRHTnlma09JbUxZ",
  "Q3lFcUE3TGljOTUyK2t3b0VnZG5qQjNZ",
  "enJCUHJRaTVDSmJPMURuSVVEUll5aWVn",
  "SlNnZlltYlpJUlVKeElGOGt1RG5LQzdB",
  "Z1d5cVBaV3E0Wlh1TVl3V2xNRGRWTkQw",
  "b2xJQUhEYjZOSnFubzRrSk5jcGwxcXhZ",
  "c3JTRGdsbEpyUWJPcXZBNko5cUUrOEMy",
  "T21tMGhTeVZkWUtNdkZlaWY3TXppajB5",
  "MXQ3cURpVHJEd3NpUUNnVll1RDEyU1N0",
  "cE9EMkNOcG9EbzZOclBDdVRoQ21NV2FL",
  "SHNkN1k0VzZjSGY4bmplR2hzWXVXRnVr",
  "SG9BUjV3bTFJc3ZDR1ptTG1zMzhKM2Uz",
  "UVgxdk1XOSt6bWlQVkZrZVR2a1JjMFdJ",
  "cE9FSTd5WWx0OWdGMWw2ckhYOUI2enJV",
  "L3FWZDk3ZW94WXdRZ0szZVhFY0dHMEZY",
  "V2NqNVFFTEYwL0pPZzNnc2JKUDYvakpp",
  "Z3VpOGN2Qk9Yc1RJbm4zUG5nUVNTZHBa",
  "TG5iWkJ6Vk9PdHRnWURiNGFqSTlLN2Fq",
  "WkhNeHYxNitZbklUNVVOTWwybjIxcnZ5",
  "L21vREQ4QWtwNE8rcWNoZmFkd3dyUFVu",
  "dTRrMGRTQndZVGJ1UGkyRE9NSktJOFBM",
  "dzZNNW1OUzBVZGF4bkdwRFY1eXM2cDMr",
  "VVZZMVYyQ0xiSFdPSFFCUm9LYXdLcmZG",
  "TWNZb1hraW8zZnhDNXU3U2g5QVBMQ1B4",
  "YmVXLzdVVG5TUmxBc2xGUXJSV05CcG9J",
  "RDByM3NTbWg4UmNiT2xOenBHbCtvVHZ1",
  "ZnQ2OXV0cG5LOUJ2VDJ4SnYyUS9adFpQ",
  "VVZRbGVoYTRBVDE2UHBwYVFuNW1aZjZo",
  "RE01SDFyUmZnN2FLOTJNUXhPUT09Iiwi",
  "bm9uY2UiOiIyVVgrTVZRMnhtRlR3UWo5",
  "MU43a2tPVVhJMFhnZkliRSJ9========"
]
[2/6 Memo data] eyJkYXRhIjoiUTRhUmVWQzRGWjlkT3d3cnBjRVVYZ3ZjSXlNUnlpbEt6RndML0RzVCt1VVBTVTlxYmZZQ1RxVTkveGJDMkNzMXpPRzFXNUlpOWFzaGkxa2VyYzc4VUY4bkRWYklYMHNpa0pCcmJja2RMVXJFVHRGVWsvM3VWcGlrNW5rWWx3QXUycTgxY0NYVytOZTk4TDV3VnVlbEJrRmN0K2FHaUZESWhYYkNYSnRFazVrV0dwc0xXQ2E4THR2YnVwcG1LY3F4NXJwVDFPQ2MwUmlSVjBLSHFhQjJ3SVJGNDJONWx0NjlLNkViTFhOaWU2NGtrVWlaSTMybVRpdlI2dmQ3amxuaUtMVGUzcTlVeVFhYmpJV2IyMXRQb3ExNFhrVzhwem1WRFJmTXlvZGRvWFlrVlhWWUVmSC81Z1ZLblVBZVp4UG5lSkVmUkZUdEkwRzNvdWNNSytxK3A1VWNrdWpmQk9CRHFDTWFnRnBOQW9teXdGd25NOElRb0pxTGpMdXA5KzM1bGxWdm9KWDZTMG0ybWp6VmY0Q0l6TWdabTZQek03TDQrdVRWcjU2ajJYVlZsSlNZeGxVVnFtVkJWMUVHcmk5OXQwek1HZFhkVG9zRnRHTnlma09JbUxZQ3lFcUE3TGljOTUyK2t3b0VnZG5qQjNZenJCUHJRaTVDSmJPMURuSVVEUll5aWVnSlNnZlltYlpJUlVKeElGOGt1RG5LQzdBZ1d5cVBaV3E0Wlh1TVl3V2xNRGRWTkQwb2xJQUhEYjZOSnFubzRrSk5jcGwxcXhZc3JTRGdsbEpyUWJPcXZBNko5cUUrOEMyT21tMGhTeVZkWUtNdkZlaWY3TXppajB5MXQ3cURpVHJEd3NpUUNnVll1RDEyU1N0cE9EMkNOcG9EbzZOclBDdVRoQ21NV2FLSHNkN1k0VzZjSGY4bmplR2hzWXVXRnVrSG9BUjV3bTFJc3ZDR1ptTG1zMzhKM2UzUVgxdk1XOSt6bWlQVkZrZVR2a1JjMFdJcE9FSTd5WWx0OWdGMWw2ckhYOUI2enJVL3FWZDk3ZW94WXdRZ0szZVhFY0dHMEZYV2NqNVFFTEYwL0pPZzNnc2JKUDYvakppZ3VpOGN2Qk9Yc1RJbm4zUG5nUVNTZHBaTG5iWkJ6Vk9PdHRnWURiNGFqSTlLN2FqWkhNeHYxNitZbklUNVVOTWwybjIxcnZ5L21vREQ4QWtwNE8rcWNoZmFkd3dyUFVudTRrMGRTQndZVGJ1UGkyRE9NSktJOFBMdzZNNW1OUzBVZGF4bkdwRFY1eXM2cDMrVVZZMVYyQ0xiSFdPSFFCUm9LYXdLcmZGTWNZb1hraW8zZnhDNXU3U2g5QVBMQ1B4YmVXLzdVVG5TUmxBc2xGUXJSV05CcG9JRDByM3NTbWg4UmNiT2xOenBHbCtvVHZ1ZnQ2OXV0cG5LOUJ2VDJ4SnYyUS9adFpQVVZRbGVoYTRBVDE2UHBwYVFuNW1aZjZoRE01SDFyUmZnN2FLOTJNUXhPUT09Iiwibm9uY2UiOiIyVVgrTVZRMnhtRlR3UWo5MU43a2tPVVhJMFhnZkliRSJ9
[3/6 Solana send] RPC=https://api.devnet.solana.com; signer=ATo2C5pesfsauFMKqXw2sXHD1v3PXb1wxqrnMLxFLCD9

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
Payer balance: 9.94806648 SOL

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
Solana v1 resource limits: compute=630375 CUs; loadedAccounts=98304 bytes.

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
Solana v1 memo transaction confirmed: 2dpHTibRWUBnbggdPdmk1B8NG4qQw6br7rHVu5p8RX5DnoMp3MoQwuZxregjuPEmCZU4QsshxUAxVh3DDYYRWjXi
[3/6 Solana confirmed signature] 2dpHTibRWUBnbggdPdmk1B8NG4qQw6br7rHVu5p8RX5DnoMp3MoQwuZxregjuPEmCZU4QsshxUAxVh3DDYYRWjXi
[4/6 Solana read] Fetching the confirmed Memo instruction.

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
[4/6 Solana RPC result] {
  "signature": "2dpHTibRWUBnbggdPdmk1B8NG4qQw6br7rHVu5p8RX5DnoMp3MoQwuZxregjuPEmCZU4QsshxUAxVh3DDYYRWjXi",
  "rpcUrl": "https://api.devnet.solana.com",
  "slot": 515840937,
  "feeLamports": 5000,
  "memoPayload": "eyJkYXRhIjoiUTRhUmVWQzRGWjlkT3d3cnBjRVVYZ3ZjSXlNUnlpbEt6RndML0RzVCt1VVBTVTlxYmZZQ1RxVTkveGJDMkNzMXpPRzFXNUlpOWFzaGkxa2VyYzc4VUY4bkRWYklYMHNpa0pCcmJja2RMVXJFVHRGVWsvM3VWcGlrNW5rWWx3QXUycTgxY0NYVytOZTk4TDV3VnVlbEJrRmN0K2FHaUZESWhYYkNYSnRFazVrV0dwc0xXQ2E4THR2YnVwcG1LY3F4NXJwVDFPQ2MwUmlSVjBLSHFhQjJ3SVJGNDJONWx0NjlLNkViTFhOaWU2NGtrVWlaSTMybVRpdlI2dmQ3amxuaUtMVGUzcTlVeVFhYmpJV2IyMXRQb3ExNFhrVzhwem1WRFJmTXlvZGRvWFlrVlhWWUVmSC81Z1ZLblVBZVp4UG5lSkVmUkZUdEkwRzNvdWNNSytxK3A1VWNrdWpmQk9CRHFDTWFnRnBOQW9teXdGd25NOElRb0pxTGpMdXA5KzM1bGxWdm9KWDZTMG0ybWp6VmY0Q0l6TWdabTZQek03TDQrdVRWcjU2ajJYVlZsSlNZeGxVVnFtVkJWMUVHcmk5OXQwek1HZFhkVG9zRnRHTnlma09JbUxZQ3lFcUE3TGljOTUyK2t3b0VnZG5qQjNZenJCUHJRaTVDSmJPMURuSVVEUll5aWVnSlNnZlltYlpJUlVKeElGOGt1RG5LQzdBZ1d5cVBaV3E0Wlh1TVl3V2xNRGRWTkQwb2xJQUhEYjZOSnFubzRrSk5jcGwxcXhZc3JTRGdsbEpyUWJPcXZBNko5cUUrOEMyT21tMGhTeVZkWUtNdkZlaWY3TXppajB5MXQ3cURpVHJEd3NpUUNnVll1RDEyU1N0cE9EMkNOcG9EbzZOclBDdVRoQ21NV2FLSHNkN1k0VzZjSGY4bmplR2hzWXVXRnVrSG9BUjV3bTFJc3ZDR1ptTG1zMzhKM2UzUVgxdk1XOSt6bWlQVkZrZVR2a1JjMFdJcE9FSTd5WWx0OWdGMWw2ckhYOUI2enJVL3FWZDk3ZW94WXdRZ0szZVhFY0dHMEZYV2NqNVFFTEYwL0pPZzNnc2JKUDYvakppZ3VpOGN2Qk9Yc1RJbm4zUG5nUVNTZHBaTG5iWkJ6Vk9PdHRnWURiNGFqSTlLN2FqWkhNeHYxNitZbklUNVVOTWwybjIxcnZ5L21vREQ4QWtwNE8rcWNoZmFkd3dyUFVudTRrMGRTQndZVGJ1UGkyRE9NSktJOFBMdzZNNW1OUzBVZGF4bkdwRFY1eXM2cDMrVVZZMVYyQ0xiSFdPSFFCUm9LYXdLcmZGTWNZb1hraW8zZnhDNXU3U2g5QVBMQ1B4YmVXLzdVVG5TUmxBc2xGUXJSV05CcG9JRDByM3NTbWg4UmNiT2xOenBHbCtvVHZ1ZnQ2OXV0cG5LOUJ2VDJ4SnYyUS9adFpQVVZRbGVoYTRBVDE2UHBwYVFuNW1aZjZoRE01SDFyUmZnN2FLOTJNUXhPUT09Iiwibm9uY2UiOiIyVVgrTVZRMnhtRlR3UWo5MU43a2tPVVhJMFhnZkliRSJ9"
}
[5/6 Ledger decode] Rebuilding envelope bytes from the on-chain memo.
[5/6 Ledger recovered envelope] 1194 bytes.
[6/6 Core decrypt] Decrypting the recovered on-chain envelope.
[6/6 Core decrypted result] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "1111111111111111111111111111111111111111111111111111111111111111",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2222222222222222222222222222222222222222222222222222222222222222",
  "newCommitment": "3333333333333333333333333333333333333333333333333333333333333333",
  "sequence": "2",
  "policyCommitment": "4444444444444444444444444444444444444444444444444444444444444444",
  "gpruScopeCommitment": "5555555555555555555555555555555555555555555555555555555555555555",
  "nullifier": "6666666666666666666666666666666666666666666666666666666666666666",
  "dnaKeyCommitment": "7777777777777777777777777777777777777777777777777777777777777777"
}
[Full DBrix round trip] PASS: on-chain data decrypted to the original Core record.

 ✓ test/dbrix-roundtrip.spec.ts (2) 4750ms
   ✓ DBrix full pipeline – Core → Ledger → Solana → Ledger → Core (2) 4748ms
     ✓ logs and verifies the local Core and Ledger stages using Core test data
     ✓ submits through Solana, reads from RPC, and decrypts the recovered Core data 4496ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  23:18:01
   Duration  7.63s (transform 422ms, setup 0ms, collect 1.58s, tests 4.75s, environment 0ms, prepare 459ms)

 *  Terminal will be reused by tasks, press any key to close it.

 *  Executing task: npm run test:dbrix


> @dbrix/test-suite@0.1.0 test:dbrix
> node --env-file=.env ./node_modules/vitest/vitest.mjs run --reporter=verbose --silent=false test/dbrix-roundtrip.spec.ts


 RUN  v1.6.1 C:/Users/codepara/Desktop/packages/drix

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > logs and verifies the local Core and Ledger stages using Core test data
[Core input record] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "1111111111111111111111111111111111111111111111111111111111111111",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2222222222222222222222222222222222222222222222222222222222222222",
  "newCommitment": "3333333333333333333333333333333333333333333333333333333333333333",
  "sequence": "2",
  "policyCommitment": "4444444444444444444444444444444444444444444444444444444444444444",
  "gpruScopeCommitment": "5555555555555555555555555555555555555555555555555555555555555555",
  "nullifier": "6666666666666666666666666666666666666666666666666666666666666666",
  "dnaKeyCommitment": "7777777777777777777777777777777777777777777777777777777777777777"
}
[Core encrypted envelope] {
  "data": "z66KLjFusb62YIQMIsqv84qudmuIyvotT/rw3RG6BS9bH9RggQD0Ug6i1rf0+AUcwzO67aaH9hRIZIhTUvkKAhm3pnNGkT2/a7l1PbBDloR5t4BHIlPieLB3VykavXDjOv4AM1ejrtghIvbbz2qvK7gEa3MVzb0IkvugJCegRR5OfxwhcieXQpdbcgo12i7/bPCmqHusZTAZoU8MqJYIVQTD6ZmyrM1nlUsoon+KNKuXQYUTBuCf3cgb+plTlCsqjm5/G0TaiJWzVzJJif+yp5MTs7MVC1IDpxHArsBnq1wglH4YNOOJDEIrlVUIZEtp2VXHRiWF3SPGFyVKx7+zzIokUiXjIbevYKJ42q9K3bwGK73MwBLkEWEwro0jpfn3WiQaAMuOvQyq",
  "nonce": "2ajZI46TRV1muFpjn49Khd2KBqq0vLh7",
  "compression": "deflate"
}
[Core envelope size] plain=1194 bytes; compressed=474 bytes; saved=60.3%.
[Ledger Memo payload size] plain=1592 bytes; compressed=632 bytes.
[Ledger Base64URL slots] [
  "eyJkYXRhIjoiejY2S0xqRnVzYjYyWUlR",
  "TUlzcXY4NHF1ZG11SXl2b3RUL3J3M1JH",
  "NkJTOWJIOVJnZ1FEMFVnNmkxcmYwK0FV",
  "Y3d6TzY3YWFIOWhSSVpJaFRVdmtLQWht",
  "M3BuTkdrVDIvYTdsMVBiQkRsb1I1dDRC",
  "SElsUGllTEIzVnlrYXZYRGpPdjRBTTFl",
  "anJ0Z2hJdmJiejJxdks3Z0VhM01WemIw",
  "SWt2dWdKQ2VnUlI1T2Z4d2hjaWVYUXBk",
  "YmNnbzEyaTcvYlBDbXFIdXNaVEFab1U4",
  "TXFKWUlWUVRENlpteXJNMW5sVXNvb24r",
  "S05LdVhRWVVUQnVDZjNjZ2IrcGxUbENz",
  "cWptNS9HMFRhaUpXelZ6SkppZit5cDVN",
  "VHM3TVZDMUlEcHhIQXJzQm5xMXdnbEg0",
  "WU5PT0pERUlybFZVSVpFdHAyVlhIUmlX",
  "RjNTUEdGeVZLeDcrenpJb2tVaVhqSWJl",
  "dllLSjQycTlLM2J3R0s3M013QkxrRVdF",
  "d3JvMGpwZm4zV2lRYUFNdU92UXlxIiwi",
  "bm9uY2UiOiIyYWpaSTQ2VFJWMW11RnBq",
  "bjQ5S2hkMktCcXEwdkxoNyIsImNvbXBy",
  "ZXNzaW9uIjoiZGVmbGF0ZSJ9========"
]
[Ledger Memo payload] eyJkYXRhIjoiejY2S0xqRnVzYjYyWUlRTUlzcXY4NHF1ZG11SXl2b3RUL3J3M1JHNkJTOWJIOVJnZ1FEMFVnNmkxcmYwK0FVY3d6TzY3YWFIOWhSSVpJaFRVdmtLQWhtM3BuTkdrVDIvYTdsMVBiQkRsb1I1dDRCSElsUGllTEIzVnlrYXZYRGpPdjRBTTFlanJ0Z2hJdmJiejJxdks3Z0VhM01WemIwSWt2dWdKQ2VnUlI1T2Z4d2hjaWVYUXBkYmNnbzEyaTcvYlBDbXFIdXNaVEFab1U4TXFKWUlWUVRENlpteXJNMW5sVXNvb24rS05LdVhRWVVUQnVDZjNjZ2IrcGxUbENzcWptNS9HMFRhaUpXelZ6SkppZit5cDVNVHM3TVZDMUlEcHhIQXJzQm5xMXdnbEg0WU5PT0pERUlybFZVSVpFdHAyVlhIUmlXRjNTUEdGeVZLeDcrenpJb2tVaVhqSWJldllLSjQycTlLM2J3R0s3M013QkxrRVdFd3JvMGpwZm4zV2lRYUFNdU92UXlxIiwibm9uY2UiOiIyYWpaSTQ2VFJWMW11RnBqbjQ5S2hkMktCcXEwdkxoNyIsImNvbXByZXNzaW9uIjoiZGVmbGF0ZSJ9
[Core decrypted result] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "1111111111111111111111111111111111111111111111111111111111111111",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2222222222222222222222222222222222222222222222222222222222222222",
  "newCommitment": "3333333333333333333333333333333333333333333333333333333333333333",
  "sequence": "2",
  "policyCommitment": "4444444444444444444444444444444444444444444444444444444444444444",
  "gpruScopeCommitment": "5555555555555555555555555555555555555555555555555555555555555555",
  "nullifier": "6666666666666666666666666666666666666666666666666666666666666666",
  "dnaKeyCommitment": "7777777777777777777777777777777777777777777777777777777777777777"
}
[Local round trip] PASS: Core data survived Ledger encoding and decoded correctly.

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
[1/6 Core encrypt] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "1111111111111111111111111111111111111111111111111111111111111111",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2222222222222222222222222222222222222222222222222222222222222222",
  "newCommitment": "3333333333333333333333333333333333333333333333333333333333333333",
  "sequence": "2",
  "policyCommitment": "4444444444444444444444444444444444444444444444444444444444444444",
  "gpruScopeCommitment": "5555555555555555555555555555555555555555555555555555555555555555",
  "nullifier": "6666666666666666666666666666666666666666666666666666666666666666",
  "dnaKeyCommitment": "7777777777777777777777777777777777777777777777777777777777777777"
}
[1/6 Core encrypted envelope] {
  "data": "RwKQE8M3YxChPPXQSgY/uuYvzPK/ITzbS2wAXT+86jx++CkKmT8bPYxgUmkoni6woRvCUpE8BLCEkiUGP6rT6bKKXrMZROgLBrqRNpbAQbd+2ca+ydxR8HlerIRfYcR3G1tLmtJMW3yUep+t7ISYMydTrfsj6ugofgUu+KljybzF6U0clGS+APVXaAkl01ThX03LWh03ny0mhwBsJb68wOIv8RRIFk7ieu255wizf0GfGGMdebdiQ3nY+BOw0PnfCi6dC2JMYKSFfPeJGc/oY5QawsLU6u3QvhovlmgirXZjp2nyV3/A8lGiQ/aiLDptLSDNeCz0yVg0Cr6mh8USSFgjUfk6aaO/2JhHl5uukoJx24hQBVCzVe0iF3zCx7D+yZh4MFBnLQpj",
  "nonce": "BaZJDO+5Vq8Yqz+DX7qAQFlOPIyxsJw4",
  "compression": "deflate"
}
[2/6 Ledger encode] Building Base64URL slots from the encrypted envelope.
[2/6 Ledger slots] [
  "eyJkYXRhIjoiUndLUUU4TTNZeENoUFBY",
  "UVNnWS91dVl2elBLL0lUemJTMndBWFQr",
  "ODZqeCsrQ2tLbVQ4YlBZeGdVbWtvbmk2",
  "d29SdkNVcEU4QkxDRWtpVUdQNnJUNmJL",
  "S1hyTVpST2dMQnJxUk5wYkFRYmQrMmNh",
  "K3lkeFI4SGxlcklSZlljUjNHMXRMbXRK",
  "TVczeVVlcCt0N0lTWU15ZFRyZnNqNnVn",
  "b2ZnVXUrS2xqeWJ6RjZVMGNsR1MrQVBW",
  "WGFBa2wwMVRoWDAzTFdoMDNueTBtaHdC",
  "c0piNjh3T0l2OFJSSUZrN2lldTI1NXdp",
  "emYwR2ZHR01kZWJkaVEzblkrQk93MFBu",
  "ZkNpNmRDMkpNWUtTRmZQZUpHYy9vWTVR",
  "YXdzTFU2dTNRdmhvdmxtZ2lyWFpqcDJu",
  "eVYzL0E4bEdpUS9haUxEcHRMU0ROZUN6",
  "MHlWZzBDcjZtaDhVU1NGZ2pVZms2YWFP",
  "LzJKaEhsNXV1a29KeDI0aFFCVkN6VmUw",
  "aUYzekN4N0QreVpoNE1GQm5MUXBqIiwi",
  "bm9uY2UiOiJCYVpKRE8rNVZxOFlxeitE",
  "WDdxQVFGbE9QSXl4c0p3NCIsImNvbXBy",
  "ZXNzaW9uIjoiZGVmbGF0ZSJ9========"
]
[2/6 Memo data] eyJkYXRhIjoiUndLUUU4TTNZeENoUFBYUVNnWS91dVl2elBLL0lUemJTMndBWFQrODZqeCsrQ2tLbVQ4YlBZeGdVbWtvbmk2d29SdkNVcEU4QkxDRWtpVUdQNnJUNmJLS1hyTVpST2dMQnJxUk5wYkFRYmQrMmNhK3lkeFI4SGxlcklSZlljUjNHMXRMbXRKTVczeVVlcCt0N0lTWU15ZFRyZnNqNnVnb2ZnVXUrS2xqeWJ6RjZVMGNsR1MrQVBWWGFBa2wwMVRoWDAzTFdoMDNueTBtaHdCc0piNjh3T0l2OFJSSUZrN2lldTI1NXdpemYwR2ZHR01kZWJkaVEzblkrQk93MFBuZkNpNmRDMkpNWUtTRmZQZUpHYy9vWTVRYXdzTFU2dTNRdmhvdmxtZ2lyWFpqcDJueVYzL0E4bEdpUS9haUxEcHRMU0ROZUN6MHlWZzBDcjZtaDhVU1NGZ2pVZms2YWFPLzJKaEhsNXV1a29KeDI0aFFCVkN6VmUwaUYzekN4N0QreVpoNE1GQm5MUXBqIiwibm9uY2UiOiJCYVpKRE8rNVZxOFlxeitEWDdxQVFGbE9QSXl4c0p3NCIsImNvbXByZXNzaW9uIjoiZGVmbGF0ZSJ9
[3/6 Solana send] RPC=https://api.devnet.solana.com; signer=ATo2C5pesfsauFMKqXw2sXHD1v3PXb1wxqrnMLxFLCD9

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
Payer balance: 9.94806148 SOL

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
Solana v1 resource limits: compute=260426 CUs; loadedAccounts=98304 bytes.

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
Solana v1 memo transaction confirmed: 394jjxDWdMHDx6miUMoGKTajA8d1NVKAneNaKGcV92BueFreptDW8Yc6K97HsrZutRw6cbWDVYnZrwjSshxMCFy5
[3/6 Solana confirmed signature] 394jjxDWdMHDx6miUMoGKTajA8d1NVKAneNaKGcV92BueFreptDW8Yc6K97HsrZutRw6cbWDVYnZrwjSshxMCFy5
[4/6 Solana read] Fetching the confirmed Memo instruction.

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
[4/6 Solana RPC result] {
  "signature": "394jjxDWdMHDx6miUMoGKTajA8d1NVKAneNaKGcV92BueFreptDW8Yc6K97HsrZutRw6cbWDVYnZrwjSshxMCFy5",
  "rpcUrl": "https://api.devnet.solana.com",
  "slot": 515843817,
  "feeLamports": 5000,
  "memoPayload": "eyJkYXRhIjoiUndLUUU4TTNZeENoUFBYUVNnWS91dVl2elBLL0lUemJTMndBWFQrODZqeCsrQ2tLbVQ4YlBZeGdVbWtvbmk2d29SdkNVcEU4QkxDRWtpVUdQNnJUNmJLS1hyTVpST2dMQnJxUk5wYkFRYmQrMmNhK3lkeFI4SGxlcklSZlljUjNHMXRMbXRKTVczeVVlcCt0N0lTWU15ZFRyZnNqNnVnb2ZnVXUrS2xqeWJ6RjZVMGNsR1MrQVBWWGFBa2wwMVRoWDAzTFdoMDNueTBtaHdCc0piNjh3T0l2OFJSSUZrN2lldTI1NXdpemYwR2ZHR01kZWJkaVEzblkrQk93MFBuZkNpNmRDMkpNWUtTRmZQZUpHYy9vWTVRYXdzTFU2dTNRdmhvdmxtZ2lyWFpqcDJueVYzL0E4bEdpUS9haUxEcHRMU0ROZUN6MHlWZzBDcjZtaDhVU1NGZ2pVZms2YWFPLzJKaEhsNXV1a29KeDI0aFFCVkN6VmUwaUYzekN4N0QreVpoNE1GQm5MUXBqIiwibm9uY2UiOiJCYVpKRE8rNVZxOFlxeitEWDdxQVFGbE9QSXl4c0p3NCIsImNvbXByZXNzaW9uIjoiZGVmbGF0ZSJ9"
}
[5/6 Ledger decode] Rebuilding envelope bytes from the on-chain memo.
[5/6 Ledger recovered envelope] 474 bytes.
[6/6 Core decrypt] Decrypting the recovered on-chain envelope.
[6/6 Core decrypted result] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "1111111111111111111111111111111111111111111111111111111111111111",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2222222222222222222222222222222222222222222222222222222222222222",
  "newCommitment": "3333333333333333333333333333333333333333333333333333333333333333",
  "sequence": "2",
  "policyCommitment": "4444444444444444444444444444444444444444444444444444444444444444",
  "gpruScopeCommitment": "5555555555555555555555555555555555555555555555555555555555555555",
  "nullifier": "6666666666666666666666666666666666666666666666666666666666666666",
  "dnaKeyCommitment": "7777777777777777777777777777777777777777777777777777777777777777"
}
[Full DBrix round trip] PASS: on-chain data decrypted to the original Core record.

 ✓ test/dbrix-roundtrip.spec.ts (2) 6709ms
   ✓ DBrix full pipeline – Core → Ledger → Solana → Ledger → Core (2) 6708ms
     ✓ logs and verifies the local Core and Ledger stages using Core test data
     ✓ submits through Solana, reads from RPC, and decrypts the recovered Core data 6476ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  23:29:33
   Duration  9.22s (transform 346ms, setup 0ms, collect 1.62s, tests 6.71s, environment 0ms, prepare 368ms)

 *  Terminal will be reused by tasks, press any key to close it.

 *  Executing task: npm run test:dbrix


> @dbrix/test-suite@0.1.0 test:dbrix
> node --env-file=.env ./node_modules/vitest/vitest.mjs run --reporter=verbose --silent=false test/dbrix-roundtrip.spec.ts


 RUN  v1.6.1 C:/Users/codepara/Desktop/packages/drix

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > logs and verifies the local Core and Ledger stages using Core test data
[Core input record] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "d7095b07298c5f7e10e03b97618a5460a97d9b787031124faad875b0a603a14e",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2b5b86a7b68e3c3d786be74dab147de7b5c44ea145edbd7c9bcef0be4555b3e9",
  "newCommitment": "d62b0a14cae30a9684f20f57e1c3cb4ec08434b4745d0269c93d44bafad8c62b",
  "sequence": "2",
  "policyCommitment": "fb48f3f13ae184e581ca3efefbd0a4bfd981d9854c55df350caa772197079d51",
  "gpruScopeCommitment": "cabd303dc81924d3cd08549d82c864f9fb482f3d082c6573ecfe0883ec10c477",
  "nullifier": "a1c4f0f2da86237d5ad2dbf4f72ff0f6f836bf757f1ad3da1143d2c54ebf8145",
  "dnaKeyCommitment": "9b02b0450f00f3e438c74d8c9e8ae69a9cb15bb16bd906f353309d455dfcfa56"
}
[Core encrypted envelope] {
  "data": "VNXc8W3+h5tYC5JTR98vODPxr4tIi6iPCZDeD1pDndTpff0Q2foNWGm/85rIVQ3R7S5ElWTi26BQDQHVvgKZL7N8ItB3AjAZRNaXX+AOIySRSPflBtruKKlETVjbhVP+k9wgCnmqK2sdjORMNqArUQNME7oIK1or9BaIZcmUKb5YsfxeKrULQrq8zq6bJ22n5yY2/jDdqtzP3WnO/XvXznNlviYpZebxbeSOmjx9FpBc01SqdxTIGr2v2m1EuwoHpGVMW94CobDjJSzzWDOGajqvToBrSQhkbdaZvuAP/KfHnqJGo8J4AUZusTE24sYnmF8qisD7BfjGaXCLRKvhEgAsiBlNtOpFhttC1+x6Q8cYyh+KgJpoRhKEW4EHymKjufs8jXXiaw8n360+fDjMf2+FbYE+TuNUvLJcfLINQQ+7SJwutQDb6EazxAmgS14JDbBb+ODk2TfgQOkQ6jGZOlKYrui5D76VHwvqbl7xV8s2ipKjIIaD8ArmIUcgstVRjFYIHBrV50djSZgDF6PAsIN38mMyZh+emOMWgL6osc+RbR6vrEy0dR1g00z2JBrakDYUriDaHaLf+FGOHHu4qjQQ793RxGXBc5DIRz2s0CbAv6fSMJN9297GVimGwYyzv4SzjVJpl6dAMlWu7jw91hCeJtHM6TaT+nYY6Gbpes9mejmhZJeJm1ofcQiqyv+dEP62MeSTHD4J7qiCZzaD2k3I0hL4bEVgB/StPENKWmyu3nQ=",
  "nonce": "PYRlnVHbjOAqpGPkPKvxb1MC2lh+7Vtz",
  "compression": "deflate"
}
[Core envelope size] plain=1194 bytes; compressed=830 bytes; saved=30.5%.
[Ledger Memo payload size] plain=1592 bytes; compressed=1107 bytes; saved=30.5%.
[Ledger Base64URL slots] [
  "eyJkYXRhIjoiVk5YYzhXMytoNXRZQzVK",
  "VFI5OHZPRFB4cjR0SWk2aVBDWkRlRDFw",
  "RG5kVHBmZjBRMmZvTldHbS84NXJJVlEz",
  "UjdTNUVsV1RpMjZCUURRSFZ2Z0taTDdO",
  "OEl0QjNBakFaUk5hWFgrQU9JeVNSU1Bm",
  "bEJ0cnVLS2xFVFZqYmhWUCtrOXdnQ25t",
  "cUsyc2RqT1JNTnFBclVRTk1FN29JSzFv",
  "cjlCYUlaY21VS2I1WXNmeGVLclVMUXJx",
  "OHpxNmJKMjJuNXlZMi9qRGRxdHpQM1du",
  "Ty9Ydlh6bk5sdmlZcFplYnhiZVNPbWp4",
  "OUZwQmMwMVNxZHhUSUdyMnYybTFFdXdv",
  "SHBHVk1XOTRDb2JEakpTenpXRE9HYWpx",
  "dlRvQnJTUWhrYmRhWnZ1QVAvS2ZIbnFK",
  "R284SjRBVVp1c1RFMjRzWW5tRjhxaXNE",
  "N0JmakdhWENMUkt2aEVnQXNpQmxOdE9w",
  "Rmh0dEMxK3g2UThjWXloK0tnSnBvUmhL",
  "RVc0RUh5bUtqdWZzOGpYWGlhdzhuMzYw",
  "K2ZEak1mMitGYllFK1R1TlV2TEpjZkxJ",
  "TlFRKzdTSnd1dFFEYjZFYXp4QW1nUzE0",
  "SkRiQmIrT0RrMlRmZ1FPa1E2akdaT2xL",
  "WXJ1aTVENzZWSHd2cWJsN3hWOHMyaXBL",
  "aklJYUQ4QXJtSVVjZ3N0VlJqRllJSEJy",
  "VjUwZGpTWmdERjZQQXNJTjM4bU15Wmgr",
  "ZW1PTVdnTDZvc2MrUmJSNnZyRXkwZFIx",
  "ZzAwejJKQnJha0RZVXJpRGFIYUxmK0ZH",
  "T0hIdTRxalFRNzkzUnhHWEJjNURJUnoy",
  "czBDYkF2NmZTTUpOOTI5N0dWaW1Hd1l5",
  "enY0U3pqVkpwbDZkQU1sV3U3anc5MWhD",
  "ZUp0SE02VGFUK25ZWTZHYnBlczltZWpt",
  "aFpKZUptMW9mY1FpcXl2K2RFUDYyTWVT",
  "VEhENEo3cWlDWnphRDJrM0kwaEw0YkVW",
  "Z0IvU3RQRU5LV215dTNuUT0iLCJub25j",
  "ZSI6IlBZUmxuVkhiak9BcXBHUGtQS3Z4",
  "YjFNQzJsaCs3VnR6IiwiY29tcHJlc3Np",
  "b24iOiJkZWZsYXRlIn0============="
]
[Ledger Memo payload] eyJkYXRhIjoiVk5YYzhXMytoNXRZQzVKVFI5OHZPRFB4cjR0SWk2aVBDWkRlRDFwRG5kVHBmZjBRMmZvTldHbS84NXJJVlEzUjdTNUVsV1RpMjZCUURRSFZ2Z0taTDdOOEl0QjNBakFaUk5hWFgrQU9JeVNSU1BmbEJ0cnVLS2xFVFZqYmhWUCtrOXdnQ25tcUsyc2RqT1JNTnFBclVRTk1FN29JSzFvcjlCYUlaY21VS2I1WXNmeGVLclVMUXJxOHpxNmJKMjJuNXlZMi9qRGRxdHpQM1duTy9Ydlh6bk5sdmlZcFplYnhiZVNPbWp4OUZwQmMwMVNxZHhUSUdyMnYybTFFdXdvSHBHVk1XOTRDb2JEakpTenpXRE9HYWpxdlRvQnJTUWhrYmRhWnZ1QVAvS2ZIbnFKR284SjRBVVp1c1RFMjRzWW5tRjhxaXNEN0JmakdhWENMUkt2aEVnQXNpQmxOdE9wRmh0dEMxK3g2UThjWXloK0tnSnBvUmhLRVc0RUh5bUtqdWZzOGpYWGlhdzhuMzYwK2ZEak1mMitGYllFK1R1TlV2TEpjZkxJTlFRKzdTSnd1dFFEYjZFYXp4QW1nUzE0SkRiQmIrT0RrMlRmZ1FPa1E2akdaT2xLWXJ1aTVENzZWSHd2cWJsN3hWOHMyaXBLaklJYUQ4QXJtSVVjZ3N0VlJqRllJSEJyVjUwZGpTWmdERjZQQXNJTjM4bU15WmgrZW1PTVdnTDZvc2MrUmJSNnZyRXkwZFIxZzAwejJKQnJha0RZVXJpRGFIYUxmK0ZHT0hIdTRxalFRNzkzUnhHWEJjNURJUnoyczBDYkF2NmZTTUpOOTI5N0dWaW1Hd1l5enY0U3pqVkpwbDZkQU1sV3U3anc5MWhDZUp0SE02VGFUK25ZWTZHYnBlczltZWptaFpKZUptMW9mY1FpcXl2K2RFUDYyTWVTVEhENEo3cWlDWnphRDJrM0kwaEw0YkVWZ0IvU3RQRU5LV215dTNuUT0iLCJub25jZSI6IlBZUmxuVkhiak9BcXBHUGtQS3Z4YjFNQzJsaCs3VnR6IiwiY29tcHJlc3Npb24iOiJkZWZsYXRlIn0
[Core decrypted result] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "d7095b07298c5f7e10e03b97618a5460a97d9b787031124faad875b0a603a14e",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2b5b86a7b68e3c3d786be74dab147de7b5c44ea145edbd7c9bcef0be4555b3e9",
  "newCommitment": "d62b0a14cae30a9684f20f57e1c3cb4ec08434b4745d0269c93d44bafad8c62b",
  "sequence": "2",
  "policyCommitment": "fb48f3f13ae184e581ca3efefbd0a4bfd981d9854c55df350caa772197079d51",
  "gpruScopeCommitment": "cabd303dc81924d3cd08549d82c864f9fb482f3d082c6573ecfe0883ec10c477",
  "nullifier": "a1c4f0f2da86237d5ad2dbf4f72ff0f6f836bf757f1ad3da1143d2c54ebf8145",
  "dnaKeyCommitment": "9b02b0450f00f3e438c74d8c9e8ae69a9cb15bb16bd906f353309d455dfcfa56"
}
[Local round trip] PASS: Core data survived Ledger encoding and decoded correctly.

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
[1/6 Core encrypt] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "d7095b07298c5f7e10e03b97618a5460a97d9b787031124faad875b0a603a14e",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2b5b86a7b68e3c3d786be74dab147de7b5c44ea145edbd7c9bcef0be4555b3e9",
  "newCommitment": "d62b0a14cae30a9684f20f57e1c3cb4ec08434b4745d0269c93d44bafad8c62b",
  "sequence": "2",
  "policyCommitment": "fb48f3f13ae184e581ca3efefbd0a4bfd981d9854c55df350caa772197079d51",
  "gpruScopeCommitment": "cabd303dc81924d3cd08549d82c864f9fb482f3d082c6573ecfe0883ec10c477",
  "nullifier": "a1c4f0f2da86237d5ad2dbf4f72ff0f6f836bf757f1ad3da1143d2c54ebf8145",
  "dnaKeyCommitment": "9b02b0450f00f3e438c74d8c9e8ae69a9cb15bb16bd906f353309d455dfcfa56"
}
[1/6 Core encrypted envelope] {
  "data": "Vycwn0lJytnCafgHShoYSzuA4N8WQOqh+40wX8PG20a8U2vraxsSq14lWoRmpj03bSklRDtoAiw1aNCy2m5a/PaN4kXo8FN3ofpA/yuM+nJI5PJ+Kw4Vk5f3sMTzgcAHkfTjDDpHigQO7tc0FEI/oUHwaaLJOZyckNX85V2cEjBVxy25Q69m/I1eUFfgSNMCSN4zV7kkzi8Oqfoa9sscWG2apFZe68P5bO415QQLPI8IqwmoSTQTadbnmCYPfja3uhIgok97AvMaRQzDqF4l/yJ4La1U7QCLTQgTe8ydsZeyzANwAt2dhlzn5NZsacbDq6WJ8LC2UHxIkl/1eI6rB47w0DhpARrB1P3iKYRBLXuSj4gLDq1U8S6QP6r5A5IV3QBQnpAOBY9yh96I7Kg3leeno3NatHIoXy87tlYhBTYH+ctVXjZ57slApYINhzSd8Jh7oWg0+BwR6efJApjDt5RzB9Vc2osPqReyTw4zTL7ovJ9drhqqibbr4tepafIW9rm5BfDN+UCRNnGd8GG9CfbyKGn4NEau8yS0868GqkJPrsWdeASmOwx9Co1u2JPimYKqs0y162aVQUsdmlmjaqFUFjoYLllJNQcHnXGaqvjOCuq8hFP7qZ1GUmu/2PILl1U2ryLYdIi6tNUmCasNgL5e9LThzHfWzza83w2rukLis+qaxiY4a3CF45SJTUkH9vEzd3mxmtsmfqGbArAvTHQEt4kVa+3YmkpNaMMk5Y2mT6E=",
  "nonce": "Qtnn5X7rejYcZ43RMuQ02ewQei3Hd2gY",
  "compression": "deflate"
}
[2/6 Ledger encode] Building Base64URL slots from the encrypted envelope.
[2/6 Ledger slots] [
  "eyJkYXRhIjoiVnljd24wbEp5dG5DYWZn",
  "SFNob1lTenVBNE44V1FPcWgrNDB3WDhQ",
  "RzIwYThVMnZyYXhzU3ExNGxXb1JtcGow",
  "M2JTa2xSRHRvQWl3MWFOQ3kybTVhL1Bh",
  "TjRrWG84Rk4zb2ZwQS95dU0rbkpJNVBK",
  "K0t3NFZrNWYzc01UemdjQUhrZlRqRERw",
  "SGlnUU83dGMwRkVJL29VSHdhYUxKT1p5",
  "Y2tOWDg1VjJjRWpCVnh5MjVRNjltL0kx",
  "ZVVGZmdTTk1DU040elY3a2t6aThPcWZv",
  "YTlzc2NXRzJhcEZaZTY4UDViTzQxNVFR",
  "TFBJOElxd21vU1RRVGFkYm5tQ1lQZmph",
  "M3VoSWdvazk3QXZNYVJRekRxRjRsL3lK",
  "NExhMVU3UUNMVFFnVGU4eWRzWmV5ekFO",
  "d0F0MmRobHpuNU5ac2FjYkRxNldKOExD",
  "MlVIeElrbC8xZUk2ckI0N3cwRGhwQVJy",
  "QjFQM2lLWVJCTFh1U2o0Z0xEcTFVOFM2",
  "UVA2cjVBNUlWM1FCUW5wQU9CWTl5aDk2",
  "STdLZzNsZWVubzNOYXRISW9YeTg3dGxZ",
  "aEJUWUgrY3RWWGpaNTdzbEFwWUlOaHpT",
  "ZDhKaDdvV2cwK0J3UjZlZkpBcGpEdDVS",
  "ekI5VmMyb3NQcVJleVR3NHpUTDdvdko5",
  "ZHJocXFpYmJyNHRlcGFmSVc5cm01QmZE",
  "TitVQ1JObkdkOEdHOUNmYnlLR240TkVh",
  "dTh5UzA4NjhHcWtKUHJzV2RlQVNtT3d4",
  "OUNvMXUySlBpbVlLcXMweTE2MmFWUVVz",
  "ZG1sbWphcUZVRmpvWUxsbEpOUWNIblhH",
  "YXF2ak9DdXE4aEZQN3FaMUdVbXUvMlBJ",
  "TGwxVTJyeUxZZElpNnROVW1DYXNOZ0w1",
  "ZTlMVGh6SGZXenphODN3MnJ1a0xpcytx",
  "YXhpWTRhM0NGNDVTSlRVa0g5dkV6ZDNt",
  "eG10c21mcUdiQXJBdlRIUUV0NGtWYSsz",
  "WW1rcE5hTU1rNVkybVQ2RT0iLCJub25j",
  "ZSI6IlF0bm41WDdyZWpZY1o0M1JNdVEw",
  "MmV3UWVpM0hkMmdZIiwiY29tcHJlc3Np",
  "b24iOiJkZWZsYXRlIn0============="
]
[2/6 Memo data] eyJkYXRhIjoiVnljd24wbEp5dG5DYWZnSFNob1lTenVBNE44V1FPcWgrNDB3WDhQRzIwYThVMnZyYXhzU3ExNGxXb1JtcGowM2JTa2xSRHRvQWl3MWFOQ3kybTVhL1BhTjRrWG84Rk4zb2ZwQS95dU0rbkpJNVBKK0t3NFZrNWYzc01UemdjQUhrZlRqRERwSGlnUU83dGMwRkVJL29VSHdhYUxKT1p5Y2tOWDg1VjJjRWpCVnh5MjVRNjltL0kxZVVGZmdTTk1DU040elY3a2t6aThPcWZvYTlzc2NXRzJhcEZaZTY4UDViTzQxNVFRTFBJOElxd21vU1RRVGFkYm5tQ1lQZmphM3VoSWdvazk3QXZNYVJRekRxRjRsL3lKNExhMVU3UUNMVFFnVGU4eWRzWmV5ekFOd0F0MmRobHpuNU5ac2FjYkRxNldKOExDMlVIeElrbC8xZUk2ckI0N3cwRGhwQVJyQjFQM2lLWVJCTFh1U2o0Z0xEcTFVOFM2UVA2cjVBNUlWM1FCUW5wQU9CWTl5aDk2STdLZzNsZWVubzNOYXRISW9YeTg3dGxZaEJUWUgrY3RWWGpaNTdzbEFwWUlOaHpTZDhKaDdvV2cwK0J3UjZlZkpBcGpEdDVSekI5VmMyb3NQcVJleVR3NHpUTDdvdko5ZHJocXFpYmJyNHRlcGFmSVc5cm01QmZETitVQ1JObkdkOEdHOUNmYnlLR240TkVhdTh5UzA4NjhHcWtKUHJzV2RlQVNtT3d4OUNvMXUySlBpbVlLcXMweTE2MmFWUVVzZG1sbWphcUZVRmpvWUxsbEpOUWNIblhHYXF2ak9DdXE4aEZQN3FaMUdVbXUvMlBJTGwxVTJyeUxZZElpNnROVW1DYXNOZ0w1ZTlMVGh6SGZXenphODN3MnJ1a0xpcytxYXhpWTRhM0NGNDVTSlRVa0g5dkV6ZDNteG10c21mcUdiQXJBdlRIUUV0NGtWYSszWW1rcE5hTU1rNVkybVQ2RT0iLCJub25jZSI6IlF0bm41WDdyZWpZY1o0M1JNdVEwMmV3UWVpM0hkMmdZIiwiY29tcHJlc3Npb24iOiJkZWZsYXRlIn0
[3/6 Solana send] RPC=https://api.devnet.solana.com; signer=ATo2C5pesfsauFMKqXw2sXHD1v3PXb1wxqrnMLxFLCD9

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
Payer balance: 9.94805648 SOL

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
Solana v1 resource limits: compute=443481 CUs; loadedAccounts=98304 bytes.

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
Solana v1 memo transaction confirmed: 4oMico9PurQoNgPbAX9qVw62SyByAmJF49YiKbBSaa7k13HyTNVe7ZBuyQjLcXwCMJVi5stwF8YXcGiXiWkzcb3e
[3/6 Solana confirmed signature] 4oMico9PurQoNgPbAX9qVw62SyByAmJF49YiKbBSaa7k13HyTNVe7ZBuyQjLcXwCMJVi5stwF8YXcGiXiWkzcb3e
[4/6 Solana read] Fetching the confirmed Memo instruction.

stdout | test/dbrix-roundtrip.spec.ts > DBrix full pipeline – Core → Ledger → Solana → Ledger → Core > submits throughSolana, reads from RPC, and decrypts the recovered Core data
[4/6 Solana RPC result] {
  "signature": "4oMico9PurQoNgPbAX9qVw62SyByAmJF49YiKbBSaa7k13HyTNVe7ZBuyQjLcXwCMJVi5stwF8YXcGiXiWkzcb3e",
  "rpcUrl": "https://api.devnet.solana.com",
  "slot": 515844796,
  "feeLamports": 5000,
  "memoPayload": "eyJkYXRhIjoiVnljd24wbEp5dG5DYWZnSFNob1lTenVBNE44V1FPcWgrNDB3WDhQRzIwYThVMnZyYXhzU3ExNGxXb1JtcGowM2JTa2xSRHRvQWl3MWFOQ3kybTVhL1BhTjRrWG84Rk4zb2ZwQS95dU0rbkpJNVBKK0t3NFZrNWYzc01UemdjQUhrZlRqRERwSGlnUU83dGMwRkVJL29VSHdhYUxKT1p5Y2tOWDg1VjJjRWpCVnh5MjVRNjltL0kxZVVGZmdTTk1DU040elY3a2t6aThPcWZvYTlzc2NXRzJhcEZaZTY4UDViTzQxNVFRTFBJOElxd21vU1RRVGFkYm5tQ1lQZmphM3VoSWdvazk3QXZNYVJRekRxRjRsL3lKNExhMVU3UUNMVFFnVGU4eWRzWmV5ekFOd0F0MmRobHpuNU5ac2FjYkRxNldKOExDMlVIeElrbC8xZUk2ckI0N3cwRGhwQVJyQjFQM2lLWVJCTFh1U2o0Z0xEcTFVOFM2UVA2cjVBNUlWM1FCUW5wQU9CWTl5aDk2STdLZzNsZWVubzNOYXRISW9YeTg3dGxZaEJUWUgrY3RWWGpaNTdzbEFwWUlOaHpTZDhKaDdvV2cwK0J3UjZlZkpBcGpEdDVSekI5VmMyb3NQcVJleVR3NHpUTDdvdko5ZHJocXFpYmJyNHRlcGFmSVc5cm01QmZETitVQ1JObkdkOEdHOUNmYnlLR240TkVhdTh5UzA4NjhHcWtKUHJzV2RlQVNtT3d4OUNvMXUySlBpbVlLcXMweTE2MmFWUVVzZG1sbWphcUZVRmpvWUxsbEpOUWNIblhHYXF2ak9DdXE4aEZQN3FaMUdVbXUvMlBJTGwxVTJyeUxZZElpNnROVW1DYXNOZ0w1ZTlMVGh6SGZXenphODN3MnJ1a0xpcytxYXhpWTRhM0NGNDVTSlRVa0g5dkV6ZDNteG10c21mcUdiQXJBdlRIUUV0NGtWYSszWW1rcE5hTU1rNVkybVQ2RT0iLCJub25jZSI6IlF0bm41WDdyZWpZY1o0M1JNdVEwMmV3UWVpM0hkMmdZIiwiY29tcHJlc3Npb24iOiJkZWZsYXRlIn0"
}
[5/6 Ledger decode] Rebuilding envelope bytes from the on-chain memo.
[5/6 Ledger recovered envelope] 830 bytes.
[6/6 Core decrypt] Decrypting the recovered on-chain envelope.
[6/6 Core decrypted result] {
  "protocol": "TCAP",
  "instruction": "credit_tcap_tin_tip_v2",
  "version": 1,
  "tokenId": 1,
  "mint": "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
  "amountBaseUnits": "1250000",
  "authorizationDigest": "d7095b07298c5f7e10e03b97618a5460a97d9b787031124faad875b0a603a14e",
  "validAfterSlot": "515812000",
  "expiresAtSlot": "515812200",
  "previousCommitment": "2b5b86a7b68e3c3d786be74dab147de7b5c44ea145edbd7c9bcef0be4555b3e9",
  "newCommitment": "d62b0a14cae30a9684f20f57e1c3cb4ec08434b4745d0269c93d44bafad8c62b",
  "sequence": "2",
  "policyCommitment": "fb48f3f13ae184e581ca3efefbd0a4bfd981d9854c55df350caa772197079d51",
  "gpruScopeCommitment": "cabd303dc81924d3cd08549d82c864f9fb482f3d082c6573ecfe0883ec10c477",
  "nullifier": "a1c4f0f2da86237d5ad2dbf4f72ff0f6f836bf757f1ad3da1143d2c54ebf8145",
  "dnaKeyCommitment": "9b02b0450f00f3e438c74d8c9e8ae69a9cb15bb16bd906f353309d455dfcfa56"
}
[Full DBrix round trip] PASS: on-chain data decrypted to the original Core record.

 ✓ test/dbrix-roundtrip.spec.ts (2) 3081ms
   ✓ DBrix full pipeline – Core → Ledger → Solana → Ledger → Core (2) 3079ms
     ✓ logs and verifies the local Core and Ledger stages using Core test data
     ✓ submits through Solana, reads from RPC, and decrypts the recovered Core data 2808ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  23:33:33
   Duration  5.55s (transform 390ms, setup 0ms, collect 1.56s, tests 3.08s, environment 0ms, prepare 366ms)

 *  Terminal will be reused by tasks, press any key to close it.
