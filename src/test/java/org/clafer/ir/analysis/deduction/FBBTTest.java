package org.clafer.ir.analysis.deduction;

import org.clafer.ir.IrIntVar;
import org.clafer.ir.IrModule;
import org.clafer.ir.IrUtil;
import static org.clafer.ir.Irs.boundInt;
import static org.clafer.ir.Irs.constant;
import static org.clafer.ir.Irs.equal;
import static org.junit.Assert.assertEquals;
import org.junit.Test;

/**
 *
 * @author jimmy
 */
public class FBBTTest {

    @Test
    public void testCoalesceIntConstant() {
        IrModule module = new IrModule();
        IrIntVar var = boundInt("var", 0, 10);
        module.addConstraint(equal(var, constant(3)));

        IrIntVar coalesced = new FBBT().propagate(module).getFst().get(var);
        assertEquals(Integer.valueOf(3), IrUtil.getConstant(coalesced));
    }
}