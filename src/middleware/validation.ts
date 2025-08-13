import type { Request, Response, NextFunction } from 'express';
import { type ZodSchema, ZodError } from 'zod/v3';

export const validateBody = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = schema.parse(req.body);
      // Update req.body with validated data, schema may have default values.
      req.body = validatedData;
      next();
    } catch (e) {
      if (e instanceof ZodError) {
        // Next is not called here, because error is handled by middleware
        return res.status(400).json({
          status: 'Validation failed',
          details: e.issues.map((err) => {
            return {
              field: err.path.join('.'),
              message: err.message,
            };
          }),
        });
      }
      next(e);
    }
  };
};
