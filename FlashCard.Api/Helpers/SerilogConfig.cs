using Microsoft.Extensions.Configuration;
using Serilog;
using Serilog.Sinks.MSSqlServer;
using System.Collections.Generic;
using Serilog.Events;
using System.Data;

namespace FlashCard.Api.Helpers
{
    public static class SerilogConfig
    {
        // https://github.com/serilog/serilog/wiki/Configuration-Basics
        public static void Configure(IConfiguration configuration)
        {
            const string logTable = "Logs";
            var connectionString = configuration.GetConnectionString("FlashCardDb");

         ColumnOptions columnOptions = new ColumnOptions
            {
                AdditionalDataColumns = new List<DataColumn>
                {
                    new DataColumn("UserId", typeof(int))
                },
            };

            columnOptions.Store.Remove(StandardColumn.Properties);
            columnOptions.Store.Remove(StandardColumn.MessageTemplate);

            Log.Logger = new LoggerConfiguration()
                .WriteTo.MSSqlServer(
                    connectionString: connectionString,
                    tableName: logTable,
                    restrictedToMinimumLevel: LogEventLevel.Verbose,
                    autoCreateSqlTable: true,
                    columnOptions: columnOptions
                ).CreateLogger();
        }
    }
}
