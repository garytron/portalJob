/**
 * JobController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `JobController.create()`
   */
  create: async function (req, res) {

    const {title, description, salary, position, companyId} = req.allParams();

    try {
      if(!title)
      {
        return res.badRequest({err: 'Title is required field.'});
      }
      if(!salary)
      {
        return res.badRequest({err: 'Job salary is required field.'});
      }
      
      const jobDetail = await JobDetail.create({
        description, salary, position
      }).fetch();

      const job = await Job.create({
        title, jobDetail: jobDetail.id, company: companyId
      }).fetch();

      return res.ok(job);

    } catch (err) {
      return res.serverError(err);
    }
  },

  /**
   * `JobController.find()`
   */
  find: async function (req, res) {
    
    try {
      const jobs = await Job.find().populate('jobDetail').populate('company');

      return res.ok(jobs);
    } catch (err) {
      return res.serverError(err);
    }
  }

};

