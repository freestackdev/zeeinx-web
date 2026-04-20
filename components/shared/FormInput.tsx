import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, required, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-navy-900"
        >
          {label}
          {required && <span className="text-cyan-500 ml-1">*</span>}
        </label>
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl border text-navy-900 bg-white',
            'text-sm placeholder:text-gray-400',
            'transition-all duration-200 outline-none',
            'border-gray-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20',
            error && 'border-red-400 focus:border-red-400 focus:ring-red-400/20',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500 mt-0.5" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

interface FormTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, required, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-navy-900"
        >
          {label}
          {required && <span className="text-cyan-500 ml-1">*</span>}
        </label>
        <textarea
          id={inputId}
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl border text-navy-900 bg-white',
            'text-sm placeholder:text-gray-400 resize-none',
            'transition-all duration-200 outline-none',
            'border-gray-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20',
            error && 'border-red-400 focus:border-red-400 focus:ring-red-400/20',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-500 mt-0.5" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormTextarea.displayName = 'FormTextarea';

export default FormInput;
