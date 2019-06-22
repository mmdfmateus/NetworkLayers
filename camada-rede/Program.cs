using System;

namespace camada_rede
{
    public class Program
    {
        public static FilesService filesService = new FilesService();
        public static string hostsPath = "hostsTable.json";

        public static void Main(string[] args)
        {
            var hostsTable = filesService.GetHosts(hostsPath);
            Console.WriteLine(hostsTable.Hosts[0].Mask);
        }
    }
}
