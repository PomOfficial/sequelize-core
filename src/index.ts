/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project sequelize-core
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

import {CreatePlugin} from "@pomegranate/plugin-tools";
import {SequelizeCore} from "./Plugins/SequelizeCore";
import {SequelizeModels} from "./Plugins/SequelizeModels";
import {Sequelize, DataTypes, Model} from 'sequelize'
export {Model}


export const Plugin = CreatePlugin('application')
.configuration({
  name: 'Sequelize'
})
.applicationPlugins([
  SequelizeCore,
  SequelizeModels
])