Moralis.Cloud.define("SetSettingsUser", async (request) => {
  
  const query = new Moralis.Query("_User");
  const owner = request.params.owner;

  query.equalTo("ethAddress", owner);
  const queryResult = await query.first({ useMasterKey: true });

  if (!queryResult) return undefined;

  queryResult.set("bio", request.params.bio);

  await queryResult.save(null, { useMasterKey: true });
  
});