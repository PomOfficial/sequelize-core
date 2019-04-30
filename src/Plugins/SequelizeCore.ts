/**
 * @file SequelizeCore
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project sequelize-core
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

import {CreatePlugin} from "@pomegranate/plugin-tools";
import {Sequelize, DataTypes} from 'sequelize'

export const SequelizeCore = CreatePlugin('merge')
  .configuration({
    name: 'SequelizeCore',
    injectableParam: 'SQL'
  })
  .hooks({
    load: () => {
      return {Sequelize: Sequelize, DataTypes: DataTypes}
    }
  })