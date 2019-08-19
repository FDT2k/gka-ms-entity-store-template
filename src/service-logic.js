/*

handle translations store
*/
const inspect = require('util').inspect;
const _ = require('lodash');

const {store} = require('@geekagency/metrics/store')

const model = require('./models/model');

const entitySingular = 'entity';
const entityPlural = 'entities';
const defaultNatsTopic = 'entity-store';

module.exports= (nats,logger, entity_store) =>{

  const {search_entity,upsert_entity,insert_entity,update_entity,get_entity,delete_entity,list_entity}
            = entity_store(nats,'entity','entities',model);

  const register = ()=>{
    nats.subscribe(defaultNatsTopic+'.search',search_entity)
    nats.subscribe(defaultNatsTopic+'.upsert',upsert_entity)
    nats.subscribe(defaultNatsTopic+'.insert',insert_entity)
    nats.subscribe(defaultNatsTopic+'.update',update_entity)
    nats.subscribe(defaultNatsTopic+'.get',get_entity)
    nats.subscribe(defaultNatsTopic+'.delete',delete_entity)
    nats.subscribe(defaultNatsTopic+'.list',list_entity)
  }


  return {register}
}
