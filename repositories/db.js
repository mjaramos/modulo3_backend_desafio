import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'postgres://nbfbgnlv:aRn6yHEoQjHAZkvrIW5TpzxNEHEZ0mpA@batyr.db.elephantsql.com/nbfbgnlv',
  {
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
