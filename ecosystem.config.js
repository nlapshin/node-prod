module.exports = {
  apps : [{
    name: 'node-proc',
    script: 'src/index.js',
    exec_mode: 'cluster',
    instances: 4,
    watch: '.',
    increment_var: 'PORT',
    env: {
      PORT: 4000
    }
  }],
};
