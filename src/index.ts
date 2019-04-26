/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project sequelize-core
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

import {CreatePlugin} from "@pomegranate/plugin-tools";
import {Sequelize} from 'sequelize'
import * as SequelizeModule from 'sequelize'
export {SequelizeModule}

export const Plugin = CreatePlugin('merge')
  .configuration({
    name: 'Sequelize-Core',
    injectableParam: 'SQL'
  })
  .hooks({
    load: () => {
      return {Sequelize: Sequelize}
    }
  })
