using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;

namespace camada_rede
{
    public class NetworkServices
    {

        public bool IsIPInMyNetwork(string myIP, string destIP, string myMask)
        {
            var myNetworkIP = BitwiseAndOperation(myIP, myMask);
            var destNetworkIP = BitwiseAndOperation(destIP, myMask);

            return (myNetworkIP == destNetworkIP);
        }

        private string ConvertToBin(string ip)
        {
            int fromBase = 16;
            int toBase = 10;

            return Convert.ToString(Convert.ToInt32(ip, fromBase), toBase);
        }

        private string BitwiseAndOperation(string first, string second)
        {
            var firstNums = first.Split(".");
            var secondNums = second.Split(".");

            var result = string.Empty;
            for (var i = 0; i < 4; i++)
            {
                result += int.Parse(firstNums[i]) & int.Parse(firstNums[i]);
                if (i != 3)
                    result += ".";
            }
            
            return result;
        }
    }
}