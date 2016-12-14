let poolData:Array<any> = [{"poolId":"r1picaxo50","name":"r1xoneor","domain":"checkout",
                              "tags":["checkout","prox","checkoutfe","service"],
                              "serviceClients":[
                                {"serviceClientId":"r1picaxo-FundingInstrumentSvcV1","name":"org.ebayopensource.ginger.client.fundinginstrumentsvc.production.FundingInstrumentSvcV1","endpoint":"https://fundinginstrumentsvc.vip/pmtinssvc","destPool":""},
                                {"serviceClientId":"r1picaxo-FundingInstrumentSvcV1","name":"org.ebayopensource.ginger.client.oauthclientdetail.production.OAuthClientDetail","endpoint":"http://oauthclnt.vip/oauthclnt/core/v1","destPool":""}],
                              "machines":[
                                {"build":{"buildId":null,"buildTag":"picaxo-0.1.0_SNAPSHOT_20161109183627563_picaxo","buildTime":"09.11.2016 @ 18:37:00 PST","raptorParentVersion":"2.3.4-RELEASE"}},
                                {"build":{"buildId":null,"buildTag":"picaxo-0.1.0_SNAPSHOT_20161109183627563_picaxo","buildTime":"09.11.2016 @ 18:37:00 PST","raptorParentVersion":"2.3.4-RELEASE"}}]}];


export const TableData: Array<any> = [
  {
    'name': poolData[0].serviceClients[0].name,
    'endpoint': poolData[0].serviceClients[0].endpoint

  }, {
    'name': poolData[0].serviceClients[1].name,
    'endpoint': poolData[0].serviceClients[1].endpoint

  }
];
