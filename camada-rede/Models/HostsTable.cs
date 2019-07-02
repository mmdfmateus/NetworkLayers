using System;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace camada_rede
{
    public class HostsTable
    {
        [JsonProperty("hosts")]
        public List<Host> Hosts {get; set;}
    }
    public class Host
    {
        [JsonProperty("networkIP")]
        public string NetworkIP {get; set;}
        
        [JsonProperty("mask")]
        public string Mask {get; set;}

        [JsonProperty("Gateway")]
        public string Gateway {get; set;}
    }
}